const mongoose = require("mongoose");
const { s, rs, rref, ref } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    fromUser: ref("user"),
    toUser: ref("user"),
    text: rs,
    conversationId: rs,
  },
  { timestamps: true }
);

module.exports = mongoose.model("conversation", schema);
