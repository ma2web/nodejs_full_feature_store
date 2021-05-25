const express = require("express");
const router = express.Router();
const { getAll, create, remove } = require("../controllers/favorite");

const auth = require("../middlwares/auth");

router.get("/api/favorite", auth, getAll);
router.post("/api/favorite", auth, create);
router.delete("/api/favorite/:id", auth, remove);

module.exports = router;
