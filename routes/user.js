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
  getAllStores,
  update,
  upload,
} = require("../controllers/user");
const auth = require("../middlwares/auth");
const admin = require("../middlwares/admin");

router.post("/api/user/login", login);
router.post("/api/user/register", register);
router.post("/api/user/signup", userRegister);
router.post("/api/user/signin", userLogin);
router.get("/api/user/me", auth, me);
router.put("/api/user/:id", auth, update);
router.get("/api/user/upload/:id", upload);
router.get("/api/stores", getAllStores);

module.exports = router;
