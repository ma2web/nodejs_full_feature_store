const mongoose = require("mongoose");
const { s, rs, rref, ref } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    slider: [s],
  },
  { timestamps: true }
);

module.exports = mongoose.model("slider", schema);
