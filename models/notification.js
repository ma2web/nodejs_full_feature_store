const mongoose = require("mongoose");
const { s, ref } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    store: ref("user"),
    customer: ref("user"),
    text: s,
  },
  { timestamps: true }
);

module.exports = mongoose.model("notification", schema);
