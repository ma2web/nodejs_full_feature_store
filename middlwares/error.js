const winston = require("winston");

module.exports = (error, req, res, next) => {
  winston.error(error.message, error);
  return res.status(500).send(error.message);
};
