const express = require("express");
const router = express.Router();
const {
  login,
  register,
  me,
  userRegister,
  userLogin,
  getAllStores,
  update,
  upload,
  sendCode,
  verifyCode,
} = require("../controllers/user");
const auth = require("../middlwares/auth");
const admin = require("../middlwares/admin");

router.post("/api/user/login", login);
router.post("/api/user/register", register);
router.post("/api/user/signup", userRegister);
router.post("/api/user/signin", userLogin);
router.get("/api/user/me", auth, me);
router.put("/api/user/:id", auth, update);
router.post("/api/user/upload/:id", upload);
router.post("/api/user/otp", auth, sendCode);
router.post("/api/user/verify", auth, verifyCode);
router.get("/api/stores", getAllStores);

module.exports = router;
