const Order = require("../models/order");
const Product = require("../models/product");
const { createValidator, updateValidator } = require("../validators/order");

module.exports = {
  getAll: async (req, res) => {
    let user = req.user;
    if (!user) {
      return res.status(401).send("Access Denied");
    }
    let orders = await Order.find({ store: user._id }).populate({
      path: "items.item",
    });

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
    let { error } = createValidator(req.body);

    if (error) return res.status(400).send({ message: error.message });

    let order = new Order(req.body);

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

    let { error } = updateValidator({ ...req.body, id });
    if (error) return res.status(400).send({ message: error.message });

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
};
