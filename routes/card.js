const express = require("express");
const router = express.Router();
const { getAll, create, remove, update } = require("../controllers/card");

const auth = require("../middlwares/auth");

router.get("/api/card", auth, getAll);
router.post("/api/card", auth, create);
router.delete("/api/card/:id", auth, remove);
router.put("/api/card/:id", auth, update);

module.exports = router;
