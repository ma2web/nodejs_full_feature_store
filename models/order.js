const mongoose = require("mongoose");
const { s, rs, rref, rn, n } = require("../utils/mongo");
var mongoosePaginate = require("mongoose-paginate");

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
        size: s,
      },
    ],
    msgCounter: {
      ...n,
      default: 0,
    },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

module.exports = mongoose.model("order", schema);
