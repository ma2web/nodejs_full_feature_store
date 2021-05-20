const mongoose = require("mongoose");

module.exports = {
  s: { type: String },
  rs: { type: String, required: true },
  n: { type: Number },
  rn: { type: Number, required: true },
  ref: (model) => {
    return {
      type: mongoose.Schema.Types.ObjectId,
      ref: model,
    };
  },
  rref: (model) => {
    return {
      type: mongoose.Schema.Types.ObjectId,
      ref: model,
      required: true,
    };
  },
};
