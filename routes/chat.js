const express = require("express");
const router = express.Router();
const { getAll, getAllChats } = require("../controllers/chat");

const auth = require("../middlwares/auth");

router.get("/api/messages/:id", auth, getAll);
router.get("/api/messages", auth, getAllChats);

module.exports = router;
