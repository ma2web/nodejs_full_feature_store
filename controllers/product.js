const Category = require("../models/category");
const Product = require("../models/product");
const { createValidator, updateValidator } = require("../validators/product");
const path = require("path");
var fs = require("fs");
const multer = require("multer");

let uploadFileSize = 2 * 1024 * 1024;
let fp = (id) => path.join(__dirname, `../public/uploads/admin/product/${id}`);
let destination = (req, file, callback) => {
  let { id } = req.params;
  callback(null, fp(id));
};
let filename = (req, file, callback) => {
  callback(
    null,
    file.fieldname +
      "-" +
      Date.now() +
      file.originalname.substr(file.originalname.lastIndexOf(".") - 1)
  );
};
let fileFilter = (req, file, cb) => {
  [
    "image/jpeg",
    "image/bmp",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
  ].includes(file.mimetype)
    ? cb(null, true)
    : cb(null, false);
};
let storage = multer.diskStorage({ destination, filename });

module.exports = {
  getAll: async (req, res) => {
    let userId = req.params.userId;
    let products;
    if (userId) {
      products = await Product.find({ user: userId })
        .populate("categories")
        .populate("user");
    } else {
      products = await Product.find({}).populate("categories").populate("user");
    }
    return res.json(products);
  },
  popular: async (req, res) => {
    let popular = await Product.find({});
    res.send(popular);
  },
  getOne: async (req, res) => {
    let { id } = req.params;

    await Product.findOne({
      _id: id,
    })
      .populate("categories")
      .populate("user")
      .then(async (data) => {
        if (!data) return res.status(404).send("not found");

        if (req.user && req.user._id === data.user._id) {
          return res.send(data);
        } else {
          await Product.updateOne(
            { _id: data._id },
            { view: data.view + 1 },
            (err, x) => {
              if (err) return res.status(400).send(err.message);

              return res.send(data);
            }
          );
        }
      });
  },
  create: async (req, res) => {
    let { _id } = req.user;
    let { error } = createValidator(req.body);

    if (error) return res.status(400).send({ message: error.message });

    let newProduct = new Product({ ...req.body, user: _id });

    newProduct = await newProduct.save();
    return res.send(newProduct);
  },
  remove: async (req, res) => {
    let { id } = req.params;

    await Product.findOneAndRemove(
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

    await Product.updateOne(
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
  addComment: async (req, res) => {
    let { productId } = req.params;

    console.log(req.user);
    const product = await Product.findOne({ _id: productId });
    if (!product) return res.status(404).send("product not found");

    if (req.body.rating > 5 || req.body.rating < 0)
      return res.status(404).send("wrong rating input (0 ~ 5)");
    let comment = { ...req.body, user: req.user._id };

    product.comments.push(comment);

    await product.save();
    res.send(comment);
  },
  updateComment: async (req, res) => {
    let { commentId, productId } = req.params;
    let { body, rate } = req.body;

    const product = await Product.findOne({ _id: productId });
    if (!product) return res.status(404).send("product not found");

    let comment = product.comments.id(commentId);
    if (!comment) return res.status(404).send("comment not found");

    if (body) comment.body = body;
    if (rate) comment.rate = rate;

    await product.save();
    res.send("comment has been updated");
  },
  removeComment: async (req, res) => {
    let { commentId, productId } = req.params;

    const product = await Product.findOne({ _id: productId });
    if (!product) return res.status(404).send("product not found");

    product.comments.id(commentId).remove();

    await product.save();
    res.send("comment has been removed");
  },
  addCategoryToProduct: async (req, res) => {
    let { productId } = req.params;
    let { category } = req.body;

    let product = await Product.findById(productId);
    if (!product) return res.status(404).send("product not found");

    let _category = await Category.findById(category);
    if (!_category) return res.status(404).send("category not found");

    if (product.categories.includes(category))
      return res.status(404).send("already exist");

    product.categories.push(_category);

    product = await product.save();
    res.send(product);
  },
  removeCategoryFromProduct: async (req, res) => {
    let { id } = req.params;
    let { category } = req.body;

    let product = await Product.findById(id);
    if (!product) return res.status(404).send("product not found");

    if (!product.categories.includes(category))
      return res.status(404).send("not found");

    let filter = product.categories.filter((el) => el != category);
    product.categories = filter;

    product = await product.save();
    res.send(product);
  },
  addTag: async (req, res) => {
    let { productId } = req.params;
    let { tag } = req.body;

    const product = await Product.findOne({ _id: productId });
    if (!product) return res.status(404).send("product not found");

    product.tags.push(tag);

    await product.save();
    res.send("tag has been added");
  },
  removeTag: async (req, res) => {
    let { productId } = req.params;

    const product = await Product.findOne({ _id: productId });
    if (!product) return res.status(404).send("product not found");

    let newTags = product.tags.filter((tag) => tag !== req.body.tag);

    product.tags = newTags;

    await product.save();
    res.send("tag has been removed");
  },
  addSize: async (req, res) => {
    let { productId } = req.params;
    let { size, price } = req.body;

    let newSize = { size, price };

    const product = await Product.findOne({ _id: productId });

    if (!product) return res.status(404).send("product not found");

    product.sizes.push(newSize);

    await product.save();
    res.send("size has been added");
  },
  removeSize: async (req, res) => {
    let { productId } = req.params;

    let product = await Product.findOne({ _id: productId });
    if (!product) return res.status(404).send("product not found");

    let newSizes = product.sizes.filter((size) => size._id != req.body.size);

    console.log(newSizes);

    product.sizes = newSizes;

    product = await product.save();
    res.send("size has been removed");
  },
  filter: async (req, res) => {
    let { type } = req.params;
    // type => sold, createdAt, price
    await Product.find()
      .sort(`-${type}`)
      .exec((err, docs) => {
        res.send(docs);
      });
  },
  uploadImage: async (req, res) => {
    let { id } = req.params;

    fs.mkdir(
      path.join(__dirname, `../public/uploads/admin/product/${id}`),
      (err) => {
        multer({
          storage,
          fileFilter,
          limits: { fileSize: uploadFileSize },
        }).single("image")(req, res, (err) => {
          Product.findById(id, (err, data) => {
            if (!data.images) {
              data.images = [];
            }
            data.images.push(req.file.filename);
            Product.updateOne(
              { _id: id },
              { $set: { images: data.images } },
              (err, result) => {
                return res.send(req.file);
              }
            );
          });
        });
      }
    );
  },
  categoryProduct: async (req, res) => {
    let { catId } = req.params;

    let result = await Product.find({ categories: { $in: [catId] } }).populate(
      "categories"
    );

    res.send(result);
  },
};
