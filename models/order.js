const mongoose = require("mongoose");
const { s, rs, rref, rn, n } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    store: rref("user"),
    customer: rref("user"),
    status: {
      ...s,
      default: "pending",
      enum: ["pending", "proccessing", "shipped", "delivered", "cancelled"],
    },
    items: [
      {
        item: rref("product"),
        count: rn,
        size: rs,
      },
    ],
    msgCounter: {
      ...n,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", schema);
