const Slider = require("../models/slider");
const path = require("path");
var fs = require("fs");
const multer = require("multer");

let uploadFileSize = 2 * 1024 * 1024;
let fp = (id) => path.join(__dirname, `../public/uploads/admin/product/${id}`);
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
  uploadImage: async (req, res) => {
    let { id } = req.params;

    fs.mkdir(path.join(__dirname, `../public/uploads/slider`), (err) => {
      multer({
        storage,
        fileFilter,
        limits: { fileSize: uploadFileSize },
      }).single("slider")(req, res, (err) => {
        Slider.findById(id, (err, data) => {
          if (!data.images) {
            data.images = [];
          }
          data.images.push(req.file.filename);
          Slider.updateOne(
            { _id: id },
            { $set: { images: data.images } },
            (err, result) => {
              return res.send(req.file);
            }
          );
        });
      });
    });
  },
};
