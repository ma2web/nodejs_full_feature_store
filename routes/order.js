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
  addItem,
  removeItem,
  editItem,
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
router.post("/api/order/add-item/:orderId", auth, addItem);
router.delete("/api/order/remove-item/:orderId", auth, removeItem);
router.post("/api/order/update-item/:orderId", auth, editItem);

module.exports = router;
