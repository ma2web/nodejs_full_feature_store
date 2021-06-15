const Order = require("../models/order");
const Product = require("../models/product");
const { createValidator, updateValidator } = require("../validators/order");

module.exports = {
  getAll: async (req, res) => {
    let user = req.user;
    if (!user) {
      return res.status(401).send("Access Denied");
    }
    let orders = await Order.find({ store: user._id })
      .populate("items.item")
      .populate("customer")
      .sort({ updatedAt: -1 });

    return res.json(orders);
  },
  getAllConversations: async (req, res) => {
    let user = req.user;
    if (!user) {
      return res.status(401).send("Access Denied");
    }
    let orders = await Order.find({ customer: user._id })
      .populate("store")
      .populate("customer")
      .populate("items.item")
      .sort({ updatedAt: -1 });

    return res.json(orders);
  },
  getOne: async (req, res) => {
    let { id } = req.params;

    await Order.findOne({
      _id: id,
    })
      .populate("items.item")
      .populate("user")
      .then((data) => {
        if (!data) return res.status(404).send("data not found");

        return res.send(data);
      });
  },
  create: async (req, res) => {
    let customer = req.user;
    let { error } = createValidator(req.body);

    if (error) return res.status(400).send({ message: error.message });

    let order = new Order({ ...req.body, customer: customer._id });

    order = await order.save();
    return res.send(order);
  },
  remove: async (req, res) => {
    let { id } = req.params;

    await Order.findOneAndRemove(
      {
        _id: id,
      },
      (err, data) => {
        if (err) {
          return res.status(404).send(`Error: ` + err);
        } else {
          if (!data) {
            return res.status(404).send("data not found");
          } else {
            return res.send(data);
          }
        }
      }
    );
  },
  update: async (req, res) => {
    let { id } = req.params;
    let { status } = req.body;
    if (status && req.user.role !== "admin") {
      return res.status(401).send("customer can't change the status");
    }
    await Order.updateOne(
      {
        _id: id,
      },
      {
        $set: req.body,
      },
      (err, data) => {
        if (err) return res.status(404).send(`Error: ` + err);

        return res.send(data);
      }
    );
  },
  customerOrder: async (req, res) => {
    let user = req.user;

    let orders = await Order.find({ customer: user._id }).populate({
      path: "items.item",
    });
    return res.json(orders);
  },
  addItem: async (req, res) => {
    let { orderId } = req.params;
    let { item } = req.body;

    let order = await Order.findOne({ _id: orderId });
    if (!order) return res.status(404).send("order not found");

    if (order.status === "pending" && order.customer == req.user._id) {
      order.items.push(item);
      order = await order.save();
      res.send("order has been added");
    } else {
      res
        .status(401)
        .send("order status is not pending or this is not your order");
    }
  },
  removeItem: async (req, res) => {
    let { orderId } = req.params;

    let order = await Order.findOne({ _id: orderId });
    if (!order) return res.status(404).send("order not found");

    if (order.status === "pending" && order.customer == req.user._id) {
      order.items.id(addressId).remove();
      order = await order.save();
      res.send("order has been removed");
    } else {
      res
        .status(401)
        .send("order status is not pending or this is not your order");
    }
  },
  editItem: async (req, res) => {
    let { orderId } = req.params;
    let { item, count, size } = req.body;

    let order = await Order.findOne({ _id: orderId });
    if (!order) return res.status(404).send("order not found");

    if (order.status === "pending" && order.customer == req.user._id) {
      let orderf = order.items.id(orderId);
      if (!orderf) return res.status(404).send("order not found");

      if (item) orderf.item = item;
      if (count) orderf.count = count;
      if (phoneNumber) orderf.phoneNumber = phoneNumber;
      if (size) orderf.size = size;

      await user.save();
      res.send("order has been updated");
    } else {
      res
        .status(401)
        .send("order status is not pending or this is not your order");
    }
  },
};
