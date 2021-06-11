const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  remove,
  update,
  customerOrder,
  getAllConversations,
} = require("../controllers/order");

const auth = require("../middlwares/auth");
const admin = require("../middlwares/admin");

router.get("/api/order", auth, getAll);
router.get("/api/customer-order", auth, customerOrder);
router.get("/api/customer-order/conversations", auth, getAllConversations);
router.get("/api/order/:id", auth, getOne);
router.post("/api/order", auth, create);
router.delete("/api/order/:id", auth, remove);
router.put("/api/order/:id", auth, update);

module.exports = router;
