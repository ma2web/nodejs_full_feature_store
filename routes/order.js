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
  checkAvailability,
} = require("../controllers/order");

const auth = require("../middlwares/auth");
const admin = require("../middlwares/admin");

router.get("/api/order/:page*?/:limit*?", auth, getAll);
router.get("/api/customer-order", auth, customerOrder);
router.get("/api/customer-order/conversations", auth, getAllConversations);
router.get("/api/order/:id", auth, getOne);
router.post("/api/order", auth, create);
router.delete("/api/order/:id", auth, remove);
router.put("/api/order/:id", auth, update);
router.post("/api/order/add-item/:orderId", auth, addItem);
router.delete("/api/order/remove-item/:orderId/:itemId", auth, removeItem);
router.post("/api/order/update-item/:orderId", auth, editItem);
router.post("/api/order/check-available", auth, checkAvailability);

module.exports = router;
