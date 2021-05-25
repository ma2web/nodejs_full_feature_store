const User = require("../models/user");
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
const Kavenegar = require("kavenegar");
const NodeCache = require("node-cache");

let kaveNegar = Kavenegar.KavenegarApi({
  apikey: config.get("kaveNegarApiKey"),
});

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
      pick(req.body, ["name", "email", "phoneNumber", "password"])
    );

    const salt = await bcrypt.genSalt(10);
    let saltPass = await bcrypt.hash(password, salt);

    newUser.password = saltPass;

    await newUser.save();

    const token = newUser.generateAuthToken();

    let data = pick(newUser, ["_id", "name", "email", "phoneNumber"]);

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
};
