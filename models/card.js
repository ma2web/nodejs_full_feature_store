const mongoose = require("mongoose");
const { s, rs, rref, ref, rn } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    store: ref("user"),
    customer: ref("user"),
    product: ref("product"),
  },
  { timestamps: true }
);

module.exports = mongoose.model("card", schema);
