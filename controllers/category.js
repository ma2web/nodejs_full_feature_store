const Category = require("../models/category");
const { createValidator, updateValidator } = require("../validators/category");

module.exports = {
  getAll: async (req, res) => {
    let { user } = req.params;

    let query = {};

    if (user) query = { user };

    if (user) {
      let categories = await Category.find(query).populate("user");
      res.send(categories);
    } else {
      await Category.aggregate([
        {
          $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "categories",
            as: "products",
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            products: { $size: "$products" },
            description: 1,
            view: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      ]).exec(function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    }
  },
  popular: async (req, res) => {
    await Category.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "categories",
          as: "products",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          products: { $size: "$products" },
          description: 1,
          view: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ]).exec(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  },
  getOne: async (req, res) => {
    await Category.findOne({ _id: req.params.id })
      .populate("user")
      .then(async (data) => {
        if (!data) return res.status(400).send("category not found");

        if (req.user && req.user._id === data.user._id) {
          res.send(data);
        } else {
          await Category.updateOne(
            { _id: data._id },
            { view: data.view + 1 },
            (err, x) => {
              if (err) return res.status(400).send(err.message);

              res.send(data);
            }
          );
        }
      });
  },
  create: async (req, res) => {
    let { error } = createValidator(req.body);
    if (error) return res.status(400).send({ message: error.message });
    let newCategory;

    let { _id } = req.user;
    newCategory = new Category({ ...req.body, user: _id });

    newCategory = await newCategory.save();
    return res.send(newCategory);
  },
  remove: async (req, res) => {
    let { id } = req.params;

    await Category.findOneAndRemove(
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

    let { error } = updateValidator({ ...req.body, id });
    if (error) return res.status(400).send({ message: error.message });

    await Category.updateOne(
      {
        _id: id,
      },
      {
        $set: req.body,
      },
      (err, data) => {
        if (err) return res.status(404).send(`Error: ` + err);

        return res.send("category has been updated");
      }
    );
  },
};
