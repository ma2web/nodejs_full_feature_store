const Slider = require("../models/slider");
const path = require("path");
var fs = require("fs");
const multer = require("multer");

let uploadFileSize = 2 * 1024 * 1024;

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

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/uploads/slider");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        file.originalname.substr(file.originalname.lastIndexOf(".") - 1)
    );
  },
});
var upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: uploadFileSize },
});
module.exports = {
  uploadImageSlider: async (req, res) => {
    fs.mkdir(path.join(__dirname, `../public/uploads/slider`), (err) => {
      if (err) return res.status(500).send(err);
      upload.single("image")(req, res, (err) => {
        if (err) return res.status(500).send(err);
        res.send(req.file);
      });
    });
  },
};
