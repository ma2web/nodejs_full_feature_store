const express = require("express");
const router = express.Router();
const {
  login,
  register,
  me,
  sendCode,
  verifyCode,
  userRegister,
  userLogin,
} = require("../controllers/user");
const auth = require("../middlwares/auth");
const admin = require("../middlwares/admin");

router.post("/api/user/login", login);
router.post("/api/user/register", register);
router.post("/api/user/signup", userRegister);
router.post("/api/user/signin", userLogin);
router.get("/api/user/me", auth, me);

module.exports = router;
