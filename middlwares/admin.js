module.exports = (req, res, next) => {
  console.log(req.user);
  if (req.user.role !== "admin")
    return res
      .status(401)
      .send(
        `Only super admin or admin can access this request not a ${req.user.role}`
      );

  next();
};
