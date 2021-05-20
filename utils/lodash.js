const _ = require("lodash");

module.exports = {
  pick: (obj, arr) => {
    return _.pick(obj, arr);
  },
};
