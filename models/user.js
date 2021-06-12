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
    email: s,
    countryCode: n,
    phoneNumber: {
      ...n,
      unique: true,
    },
    password: s,
    address: [
      {
        type: {
          ...s,
          default: "home",
        },
        countryCode: n,
        phoneNumber: n,
        address: s,
      },
    ],
    currentAddress: s,
    role: {
      ...s,
      default: "user",
      enum: ["super_admin", "admin", "user"],
    },
    active: Boolean,
    socketId: s,
    avatar: s,
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
    currentAddress: this.currentAddress,
    avatar: this.avatar,
  };

  return jwt.sign(data, config.get("jwtSecret"));
};

module.exports = mongoose.model("user", schema);
