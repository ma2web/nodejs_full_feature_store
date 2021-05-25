const Card = require("../models/card");

module.exports = {
  getAll: async (req, res) => {
    let user = req.user;

    let cards = await Card.find({ customer: user._id }).populate("product");

    return res.json(cards);
  },
  create: async (req, res) => {
    let { _id } = req.user;

    let product = req.body.product;
    let store = req.body.store;

    if (!store || !product)
      return res.status(400).send("product and store id is required");

    let c = await Card.findOne({ product });
    if (c) return res.status(400).send("already exist in card");

    let card = new Card({ ...req.body, customer: _id });

    card = await card.save();
    return res.send(card);
  },
  remove: async (req, res) => {
    let { id } = req.params;

    await Card.findOneAndRemove(
      {
        _id: id,
      },
      (err, data) => {
        if (err) {
          return res.status(404).send(`Error: ` + err);
        } else {
          if (!data) {
            return res.status(404).send("not found");
          } else {
            return res.send(data);
          }
        }
      }
    );
  },
  update: async (req, res) => {
    let { id } = req.params;

    await Card.updateOne(
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
};
