module.exports = (req, res, next) => {
  console.log(req.user);
  next();
};
