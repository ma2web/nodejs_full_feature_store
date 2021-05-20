const mongoose = require("mongoose");
const { s, rs, rref, rn } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    user: rref("user"),
    status: {
      ...s,
      default: "pending",
      enum: ["pending", "proccessing", "shipped", "delivered", "cancelled"],
    },
    items: [
      {
        item: rref("product"),
        count: rn,
        color: rs,
        size: rs,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", schema);
