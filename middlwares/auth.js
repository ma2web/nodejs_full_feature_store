const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  let token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied!");

  try {
    const user = jwt.verify(token, config.get("jwtSecret"));
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
