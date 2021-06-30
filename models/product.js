const mongoose = require("mongoose");
const { s, rs, n, rn, ref, rref } = require("../utils/mongo");

let sizeSchema = new mongoose.Schema(
  {
    size: {
      ...rs,
      enum: ["large", "normal", "small"],
    },
    price: rn,
  },
  { timestamps: true }
);

let commentSchema = new mongoose.Schema(
  {
    user: rref("user"),
    body: rs,
    rate: {
      ...n,
      default: 0,
      enum: [0, 1, 2, 3, 4, 5],
    },
  },
  { timestamps: true }
);

let schema = new mongoose.Schema(
  {
    user: rref("user"),
    name: rs,
    description: s,
    images: [s],
    price: rn,
    discount: n,
    sizes: [sizeSchema],
    categories: [ref("category")],
    tags: [s],
    comments: [commentSchema],
    rating: n,
    inStock: {
      type: Boolean,
      default: true,
    },
    stock: n,
    sold: {
      ...n,
      default: 0,
    },
    view: {
      ...n,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", schema);
