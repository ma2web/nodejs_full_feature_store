const User = require("../models/user");
const Notification = require("../models/notification");
const {
  loginValidator,
  registerValidator,
  userRegisterValidator,
  userLoginValidator,
} = require("../validators/user");
const bcrypt = require("bcrypt");
const { pick } = require("../utils/lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const path = require("path");
var fs = require("fs");
const multer = require("multer");
const NodeCache = require("node-cache");

let admin = require("firebase-admin");
const product = require("../models/product");
let settings = {
  type: "xxx",
  project_id: "xxx",
  private_key_id: "xxx",
  private_key:
    "xxx",
  client_email: "xxx",
  client_id: "xxx",
  auth_uri: "xxx",
  token_uri: "xxx",
  auth_provider_x509_cert_url: "xxx",
  client_x509_cert_url:
    "xxx",
};

admin.initializeApp({
  credential: admin.credential.cert(settings),
  // databaseURL: "https://xxxx",
});

const twilio = {
  accountSid: "xxx",
  authToken: "xxx",
  from: "xxx",
};

const myCache = new NodeCache({
  stdTTL: 2 * 60 * 60,
  checkperiod: 5 * 60,
});

let uploadFileSize = 2 * 1024 * 1024;
let fp = (id) => path.join(__dirname, `../public/uploads/customer/${id}`);
let destination = (req, file, callback) => {
  let { id } = req.params;
  callback(null, fp(id));
};
let filename = (req, file, callback) => {
  callback(
    null,
    file.fieldname +
      "-" +
      Date.now() +
      file.originalname.substr(file.originalname.lastIndexOf(".") - 1)
  );
};
let fileFilter = (req, file, cb) => {
  [
    "image/jpeg",
    "image/bmp",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
  ].includes(file.mimetype)
    ? cb(null, true)
    : cb(null, false);
};
let storage = multer.diskStorage({ destination, filename });

module.exports = {
  register: async (req, res) => {
    let { email } = req.body;

    let { error } = registerValidator(req.body);
    if (error) return res.status(400).send({ message: error.message });

    const user = await User.findOne({ email });
    if (user) return res.status(400).send("user already exist");

    let newUser = new User(
      pick(req.body, [
        "firstName",
        "lastName",
        "email",
        "countryCode",
        "phoneNumber",
        "password",
        "role",
        "store",
      ])
    );

    const salt = await bcrypt.genSalt(10);
    let saltPass = await bcrypt.hash(req.body.password, salt);

    newUser.password = saltPass;

    await newUser.save();

    const token = newUser.generateAuthToken();

    let data = pick(newUser, [
      "_id",
      "firstName",
      "lastName",
      "email",
      "countryCode",
      "phoneNumber",
      "role",
      "store",
    ]);

    res.header("x-auth-token", token).send({ ...data, token });
  },
  login: async (req, res) => {
    let { email, password } = req.body;

    let { error } = loginValidator(req.body);
    if (error) return res.status(400).send({ message: error.message });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("user not exist");

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) return res.status(400).send("wrong username or password");

    const token = user.generateAuthToken();

    let data = pick(user, [
      "_id",
      "firstName",
      "lastName",
      "email",
      "countryCode",
      "phoneNumber",
      "role",
    ]);

    res.header("x-auth-token", token).send({ ...data, token });
  },
  me: async (req, res) => {
    let id = req.user._id;

    let user = await User.findById(id);

    res.send(user);
  },
  userRegister: async (req, res) => {
    let { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) return res.status(400).send("user already exist");

    let newUser = new User(
      pick(req.body, [
        "name",
        "email",
        "countryCode",
        "phoneNumber",
        "password",
      ])
    );

    const salt = await bcrypt.genSalt(10);
    let saltPass = await bcrypt.hash(password, salt);

    newUser.password = saltPass;

    await newUser.save();

    const token = newUser.generateAuthToken();

    let data = pick(newUser, [
      "_id",
      "name",
      "email",
      "countryCode",
      "phoneNumber",
      "password",
    ]);

    res.header("x-auth-token", token).send({ ...data, token });
  },
  registerWithPhoneNumber: async (req, res) => {
    let { firstName, lastName, phoneNumber, countryCode, otp } = req.body;
    if (!otp) return res.status(401).send("missed otp value");

    const user = await User.findOne({ phoneNumber });
    if (user) return res.status(409).send("user already exist");

    let newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      countryCode,
      email: phoneNumber,
    });

    newUser = await newUser.save();
    const token = newUser.generateAuthToken();

    let data = pick(newUser, [
      "_id",
      "firstName",
      "lastName",
      "countryCode",
      "phoneNumber",
    ]);

    let secret = myCache.get(phoneNumber);

    if (secret != otp) return res.status(400).send("wrong otp");

    res.send({
      message: "success",
      user: newUser,
      token,
    });

    res.header("x-auth-token", token).send({ ...data, token });
  },
  userLogin: async (req, res) => {
    let { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("user not exist");

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) return res.status(400).send("wrong username or password");

    const token = user.generateAuthToken();

    let data = pick(user, ["_id", "name", "email", "phoneNumber"]);

    res.header("x-auth-token", token).send({ ...data, token });
  },
  getAllStores: async (req, res) => {
    const admins = await User.find({ role: "admin" });

    let stores = admins.map((item) => {
      let {
        _id,
        firstName,
        lastName,
        email,
        phoneNumber,
        countryCode,
        admins,
        store,
        avatar,
      } = item;
      return {
        _id,
        avatar,
        name: store.name,
        address: store.address,
        rating: store.rating,
        owner: {
          firstName,
          lastName,
          email,
          phoneNumber,
          countryCode,
          admins,
        },
      };
    });

    res.send(stores);
  },
  update: async (req, res) => {
    let { id } = req.params;

    if (id !== req.user._id) {
      return res.status(401).send("permission denied");
    }

    await User.updateOne(
      { _id: req.user._id },
      {
        $set: req.body,
      },
      (err, data) => {
        if (err) return res.status(404).send(`Error: ` + err);
        console.log(data);
        return res.send("user has been updated");
      }
    );
  },
  upload: async (req, res) => {
    let { id } = req.params;

    fs.mkdir(
      path.join(__dirname, `../public/uploads/customer/${id}`),
      (err) => {
        multer({
          storage,
          fileFilter,
          limits: { fileSize: uploadFileSize },
        }).single("avatar")(req, res, (err) => {
          User.findById(id, (err, data) => {
            data.avatar = req.file.filename;

            User.updateOne(
              { _id: id },
              { $set: { avatar: data.avatar } },
              (err, result) => {
                return res.send(req.file);
              }
            );
          });
        });
      }
    );
  },
  sendCode: async (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    let countryCode = req.body.countryCode;

    let existUser = await User.findOne({ phoneNumber, countryCode });
    if (existUser) return res.status(404).send("user already exist");

    let code = parseInt(Math.random() * 9000 + 1000);

    myCache.set(phoneNumber, code);
    let { accountSid, authToken, from } = twilio;

    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body: `کاربر گرامی مارکت کد امنیتی شما: ${code} میباشد`,
        from,
        to: `+${countryCode}${phoneNumber}`,
      })
      .then((message) => {
        res.send({
          code,
          status: "sent",
        });
      })
      .catch(() => {
        console.log(err);
        return res.status(500).send(err);
      });
  },
  sendCodeToUsers: async (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    let countryCode = req.body.countryCode;

    let existUser = await User.findOne({ phoneNumber, countryCode });
    if (!existUser) return res.status(404).send("user not found");

    let code = parseInt(Math.random() * 9000 + 1000);

    myCache.set(phoneNumber, code);
    let { accountSid, authToken, from } = twilio;

    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body: `کاربر گرامی مارکت کد امنیتی شما: ${code} میباشد`,
        from,
        to: `+${countryCode}${phoneNumber}`,
      })
      .then((message) => {
        res.send({
          code,
          status: "sent",
        });
      })
      .catch(() => {
        console.log(err);
        return res.status(500).send(err);
      });
  },
  verifyCode: async (req, res) => {
    const { otp } = req.body;
    if (!otp) return res.status(401).send("missed otp value");
    const phoneNumber = req.body.phoneNumber;
    const user = await User.findOne({ phoneNumber });
    if (!user)
      return res
        .status(404)
        .send(
          "user not found, please sign up or filled you country code and phone number"
        );

    const token = user.generateAuthToken();

    let secret = myCache.get(phoneNumber);

    if (secret != otp) return res.status(400).send("wrong otp");

    res.send({
      message: "success",
      user,
      token,
    });
  },
  pushNotification: async (req, res) => {
    let { title, body, image, firebaseToken } = req.body;

    if (!firebaseToken) return res.status(401).json("missing firebaseToken");

    let payload = {
      notification: {
        title,
        body,
        image: image ? image : "",
      },
    };

    let options = {
      priority: "high",
      timeToLive: 60 * 60 * 24, //1 day
    };

    admin
      .messaging()
      .sendToDevice(firebaseToken, payload, options)
      .then(async (response) => {
        res.json(response);
      })
      .catch((error) => {
        res.status(402).json(error);
      });
  },
  addAddress: async (req, res) => {
    let { userId } = req.params;
    let { type, countryCode, phoneNumber, address } = req.body;

    let user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).send("user not found");

    user.address.push({ type, countryCode, phoneNumber, address });
    user = await user.save();
    res.send(user);
  },
  editAddress: async (req, res) => {
    let { addressId, userId } = req.params;
    let { type, countryCode, phoneNumber, address } = req.body;

    let user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).send("user not found");

    let addressf = user.address.id(addressId);
    if (!addressf) return res.status(404).send("address not found");

    if (type) addressf.type = type;
    if (countryCode) addressf.countryCode = countryCode;
    if (phoneNumber) addressf.phoneNumber = phoneNumber;
    if (address) addressf.address = address;

    await user.save();
    res.send("address has been updated");
  },
  removeAddress: async (req, res) => {
    let { addressId, userId } = req.params;

    let user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).send("user not found");

    user.address.id(addressId).remove();

    await user.save();
    res.send("address has been removed");
  },
  userComments: async (req, res) => {
    let { _id } = req.user;

    let userComments = await product.find({
      "comments.user": _id,
    });

    let result = userComments.map((el) => {
      return {
        comment: el.comments.filter((c) => c.user == _id),
        product: el,
      };
    });

    res.send(result);
  },
};
