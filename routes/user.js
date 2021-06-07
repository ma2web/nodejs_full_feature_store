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
  pushNotification,
  registerWithPhoneNumber,
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
router.post("/api/user/otp", sendCode);
router.post("/api/user/verify", verifyCode);
router.post("/api/user/register-with-phone", registerWithPhoneNumber);
router.post("/api/user/push", pushNotification);
router.get("/api/stores", getAllStores);

module.exports = router;
