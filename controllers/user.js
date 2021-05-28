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
    let { otp } = req.body;
    let phoneNumber = req.body.phoneNumber;
    if (!otp) return res.status(400).send("missed otp value");

    let secret = myCache.get(phoneNumber);

    if (secret != otp) return res.status(400).send("wrong otp");

    res.send({
      message: "success",
    });
  },
  pushNotification: async (req, res) => {
    let admin = require("firebase-admin");
    let settings = {
      type: "service_account",
      project_id: "buono-83a23",
      private_key_id: "a3d3d1a665bba51f281544dadc558bd6da8ab795",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC88Ci4JI3rqP5l\nKPiApkTDuhmveWzqrlDNlRYHr73VqbPZIfuJ6we8jh4owRQmg9GOKNBZ43FsdIb5\nujn75v8Bkxbh4RDgQS951AlSPup35d6kSYnlU+z/mwm5N+vLuvR5Pp6KPFmu7dWt\nvgBcerRquge7f8kQX8PCMWgjAfRBNyak616D43qkvRrdTsBkQl20PvvSWH09zUhB\nIXontouh94zV51VWKiXv2kNUzbYL5XaI3cbeqKhvrpvh9MH60ciEXCJttkdGNyut\n0Ii7mGGDjoyjJP4uCfvA2QHnulAn64+L3lLCpZopGZw8eDB5orLJ8ABQLms5Cxa5\nVInN8igvAgMBAAECggEAR7cw/ZSCei0PQv6mNM7n0xNUpJKGkR3RdfddAVXnzK45\nofWQMO2RZjTbpcSEDYqDhF5hl30JlI02npvdXoxzxvk5+ksfyL91cdzWHO3cud37\nAIkZWn7curjym+dqDU7NdSgbrYTy1b9ZGDXClVfOG6S5QqZif2CaQZ/XU1JukEHi\n0UljwbJEwnAJwtDv/i0ZfcFDO+ilYhkNIJtx2YsnGQe8LZjvoenaRgmxNXyoA4cN\nxajJeuBuKMxLZUSBNg+yMME2X41ibLRU77qhqY4vfgaZXcNrXGLFVZO9WgiFwmJA\n9r0b7ceJGMfSnxEhWacC3MaLeip0WrsMaCCpvbAX4QKBgQD2gLG3P7K1fMnWKr8X\n3H+HnVE+eFeXq1aX1DZguumgw1pBscwUB5r46MgR5sxtXccR8qtfUamviuiGdiSp\nWVsB19bPupGPGuKKpmJ0s7iq7ujfTdHQPEXahO4k42AYHXzeztdpJe56TDC/y7BZ\nUPRwJW5YnO+wwuxhNAMlMC3wswKBgQDEN7GYVUtBLSt/HwrK6Vmfw7+qsTDB5U1T\nv3JW6gL1nI7VHBFnele5z2reU+NCgO4YDh96UzkV3E9SstJ1TlgbLefrk13/5Zx8\nGqh50+0fN8Jf8OBR4fpy5nMWLQDahumnjG6T4O4Mjb3PPP+noHb4tsTVGNF+bo1I\n8CtMBF6wlQKBgQDOXbtqYIdqbQhEphDJFy4lCM1FcVZTgXvDLERCAvkoP6PGL+Vc\nN2nETI2CfyhRvxqzqedSq3lVnwM/3pSeulH4XwxVaCoIFkfmL5lpfjRx1gVbPTkU\nDgGlCXidpUWDqtwpZBzuyHS4KiT9zLbcb2vUn2GcCfaYkvd2ASdI8OblBQKBgQC4\nXUQnR+0/vjtiZD51zbACZ6DNt1OCu/teN0It3A8PzByArLDFs7R9yCA36kZclFwi\nihKVk2DN44U8xPzub8BlOUrylDL8YDgae8nVPoVMkc2269M53MS/9Twpl/t3WNBu\nN4sms2+4p+2yrTPhwupGYySqvXkJ/MIPyGpGMMzvyQKBgQCVHM9p2vWG9jdT8PeH\nJ56b5cL5XBPzC+puL5ePI439aG/jFbGZteCyxehCHLUttYj9iryRqp5XF5gVPCYa\nJ74yirUFm3DmUrBkrZBrh4O4ZJuG1l6+4A4WSed6MU7yydSahGVoZy+g+GfxhqaC\nYnklsuXMUhVMb5lI851AqSLnxg==\n-----END PRIVATE KEY-----\n",
      client_email:
        "firebase-adminsdk-4q8el@buono-83a23.iam.gserviceaccount.com",
      client_id: "108945855922856114949",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4q8el%40buono-83a23.iam.gserviceaccount.com",
    };

    admin.initializeApp({
      credential: admin.credential.cert(settings),
      // databaseURL: "https://project-2503318739491532288.firebaseio.com",
    });

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
