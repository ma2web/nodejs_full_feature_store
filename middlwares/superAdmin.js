module.exports = (req, res, next) => {
  if (req.user.role !== "super_admin")
    return res
      .status(401)
      .send(`Only super admin can access this request not a ${req.user.role}`);

  next();
};
