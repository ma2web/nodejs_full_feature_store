const mongoose = require("mongoose");
const { s, rs, rn, n } = require("../utils/mongo");
const config = require("config");
const jwt = require("jsonwebtoken");

var schema = new mongoose.Schema(
  {
    firstName: s,
    lastName: s,
    username: s,
    name: s,
    email: {
      ...rs,
      unique: true,
    },
    countryCode: n,
    phoneNumber: {
      ...rn,
      unique: true,
    },
    password: rs,
    address: s,
    role: {
      ...s,
      default: "user",
      enum: ["super_admin", "admin", "user"],
    },
    active: Boolean,
    address: s,
    socketId: s,
    store: {
      name: s,
      description: s,
      address: s,
      rating: n,
    },
  },
  { timestamps: true }
);

schema.methods.generateAuthToken = function () {
  const data = {
    _id: this._id,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    countryCode: this.countryCode,
    phoneNumber: this.phoneNumber,
    address: this.address,
    role: this.role,
    socketId: this.socketId,
    store: this.store,
  };

  return jwt.sign(data, config.get("jwtSecret"));
};

module.exports = mongoose.model("user", schema);
