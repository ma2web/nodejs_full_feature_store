const Favorite = require("../models/favorite");

module.exports = {
  getAll: async (req, res) => {
    let user = req.user;

    let favorites = await Favorite.find({ customer: user._id }).populate(
      "product"
    );

    return res.json(favorites);
  },
  create: async (req, res) => {
    let { _id } = req.user;

    let product = req.body.product;
    let store = req.body.store;

    if (!store || !product)
      return res.status(400).send("product and store id is required");

    let c = await Favorite.findOne({ product, customer: _id });
    if (c) return res.status(400).send("already exist in favorite list");

    let favorite = new Favorite({ ...req.body, customer: _id });

    favorite = await favorite.save();
    return res.send(favorite);
  },
  remove: async (req, res) => {
    let { id } = req.params;

    await Favorite.findOneAndRemove(
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

    await Favorite.updateOne(
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
