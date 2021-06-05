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
let settings = {
  type: "service_account",
  project_id: "parsishop-ebab9",
  private_key_id: "0dfe0f13369f78d30a200f3684159b8f07897381",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCjXy2aHH7v6v1H\n07f9aWkZLD6Mohwd0LbN0dkEE1KKPGDoT4yRKHAkYlZcoAITHtWXnupZGr71rUSa\nc+0OeAX2UKOXUsGWt+g53EfCZf+bprFCuVgsoxwzZ+3erIZVl8Bf0B+XNR3VCp/7\n6KzLz8ikYH33p4MsJm3bHOConSu5Bfe/90QxJBsU06abb81PJvzd/X4TLzLiH5PI\nu+TCwJNyPMDhWjbVzGAJ4K4D6Tr4I26aNg6QTcc2Xgl7xUZtaF8qHvPowTI4FEc/\n8/1F0mmE2ZeJbbfZnabFc7zGMFMwJBKNbwXvwWhtboQxyIJhkUNcD21c5j/OX4+2\nmUMlwX0BAgMBAAECggEAGsGZHlxRuHQBTKTdb/YLmGvT8q8PcR1K/c/DKGpht5zG\njPA6Uqu6HLteRDKQecEwX3H6FOMkfegFYaZgH2EuLiEW1Hm2lZCZH/YhFTLPTMFd\ngVK0S4XgiyrCR8MfB8r1XrvJ8LcU+Qc8ccKxn3pFn2Y45ePcFScAvESxJpcByijE\n6KZ0Ppbuog+D6lcJyLdwX0ausocl8SyJ6qeYvMw52t0ek7SyWKwNsqmrMKCZAO1W\nJ7yCZ8vMgNima4NQUMPwf5i6xItoQudn1xS+4+VwjF9zCHWMKXgR7ScD02ZKVpGg\nSBQ/MnXrVaLK4QqMmzpeRpNvqLXRP9ZxfjC09nV4YQKBgQDa8QoeHunWio6yyW2P\n1L5FcBxTMmNC4mD/1icTorzTroCRk+U/V8qVLaUo7tzr+o4JwNTgY3KEcMJpDDU0\nQcsjORB9fPt3Hdsj+71qviWUaoXv5cAtKhTyDzaho+HRWvXEtq8ROA2gX05kQJgm\nuha28+n0WBGNmi0OQb74y3vR9wKBgQC/Bj5xcnItTTEHjnTA4wGG/qlPKpA0HA1O\nxG70w8zD21soGIZwt7uM8Sw+LJ4se006HU6e94lt2OI+MqdiqE0AU0sE9J/2rLUp\nJ2tIm8wlY7lej/KA+ltXBy6lGAQlbfyYJkWqZakFiZ9hjVSq5G8w/M7jY/oMMZjP\ncyWFRLdqxwKBgGkfcPczap17W7bWZke4Iz+d68u6ltRnc6GDRrHz4mxVDiBX/auj\nUH6+Mt3riqG3ZPmj39J5jWOv7HiZxvX3XTzlSlimaOsxp6WoWrNk5xBS8UpVayeE\nXBg5W8bStDtcTEMOYBKJcml9OVuDdEqr8PoZNUz/+DWgQF/nC3XT5fjTAoGARe/J\nSMu31bIfMz8Kq9vwoTX3Us6ogQuMK7xrSx2siEB1PVbNUdNSzSU3J4Q6XNq/yXkV\nYcoK/LadDlyJP+uSVX4pRyUws6VDpk+STcEMmtvJ8D8Pb/05F8G/aB5E1ldQVXwd\noWca3LYoLhUKXI7JzsugC0x9LZ2y7rCfmg0wgd0CgYAkjkk9fSBtsR0hZSNSnIct\nwSTN/43BZp6HBTZUFPZI1Hg3Q2Pge+SBenM9qb5zmtFK0pPHf7Ze+zhgBJJAiuQF\nL6gjcUvd29A2SyL7jp7rVAXUo/a3mLn0gat860DQzVxaZRGo081SrZk7ZgaUCxQk\nt2IwRk1C+uv+ikTDkz1gBA==\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-7mxt8@parsishop-ebab9.iam.gserviceaccount.com",
  client_id: "105617447087007173132",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7mxt8%40parsishop-ebab9.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(settings),
  // databaseURL: "https://project-2503318739491532288.firebaseio.com",
});

const twilio = {
  accountSid: "AC0d4fef5a4fee339f32f41bf319548627",
  authToken: "588ce053bc2550492eb91bee001e93fa",
  from: "+18129934450",
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

    let { error } = userRegisterValidator(req.body);
    if (error) return res.status(400).send({ message: error.message });

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
  userLogin: async (req, res) => {
    let { email, password } = req.body;

    let { error } = userLoginValidator(req.body);
    if (error) return res.status(400).send({ message: error.message });

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

    console.log(req.body);
    await User.updateOne(
      { _id: req.user._id },
      {
        $set: req.body,
      },
      (err, data) => {
        if (err) return res.status(404).send(`Error: ` + err);

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

    let code = parseInt(Math.random() * 9000 + 1000);

    myCache.set(phoneNumber, code);
    let { accountSid, authToken, from } = twilio;

    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body: `Your verification code is:` + code,
        from,
        to: `+${countryCode}${phoneNumber}`,
      })
      .then((message) => {
        res.send({
          code,
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
};
