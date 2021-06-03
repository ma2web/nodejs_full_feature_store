const mongoose = require("mongoose");
const { s, rs, rref, ref } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    order: rref("order"),
    messages: [
      {
        fromUser: ref("user"),
        toUser: ref("user"),
        body: rs,
        type: { ...rs, enum: ["text", "order", "point"] },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("chat", schema);
