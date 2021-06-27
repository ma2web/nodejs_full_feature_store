const Slider = require("../models/slider");
const path = require("path");
var fs = require("fs");
const multer = require("multer");
const e = require("express");

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
    cb(null, path.join(__dirname, "../public/uploads/slider"));
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
    multer({
      storage,
      fileFilter,
      limits: { fileSize: uploadFileSize },
    }).single("slider")(req, res, (err) => {
      if (err) return res.status(500).send(err);
      return res.send(req.file);
    });
  },
  getSliderImages: async (req, res) => {
    fs.readdir(
      path.join(__dirname, "../public/uploads/slider"),
      (err, files) => {
        res.send(files);
      }
    );
  },
  removeImageSlider: async (req, res) => {
    let { fileName } = req.params;
    await fs.unlinkSync(
      path.join(__dirname, `../public/uploads/slider/${fileName}`),
      (err) => {
        if (err) return res.status(500).send(err);
      }
    );

    res.send("image has been deleted");
  },
};
