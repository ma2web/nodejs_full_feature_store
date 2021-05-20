let mongoose = require("mongoose");

module.exports = {
  join: async (socket) => {
    let { user } = socket;

    console.log(user);
  },
};
