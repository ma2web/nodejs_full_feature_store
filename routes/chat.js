const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/chat");

const auth = require("../middlwares/auth");

router.get("/api/messages/:id", auth, getAll);

module.exports = router;
