const mongoose = require("mongoose");
const { s, rs, rref, ref } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    user: ref("user"),
    name: rs,
    description: s,
    image: s,
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", schema);
