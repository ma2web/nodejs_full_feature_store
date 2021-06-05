const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  update,
  remove,
  popular,
} = require("../controllers/category");

const auth = require("../middlwares/auth");
const admin = require("../middlwares/admin");

router.get("/api/category/:user*?", getAll);
router.get("/api/category-one/:id", getOne);
router.post("/api/category", auth, create);
router.put("/api/category/:id", auth, update);
router.delete("/api/category/:id", auth, remove);
router.delete("/api/category-popular", auth, popular);

module.exports = router;
