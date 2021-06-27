const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  remove,
  update,
  addComment,
  updateComment,
  removeComment,
  addCategoryToProduct,
  removeCategoryFromProduct,
  addTag,
  removeTag,
  addSize,
  removeSize,
  addColor,
  removeColor,
  filter,
  uploadImage,
  categoryProduct,
  popular,
  chart,
} = require("../controllers/product");

const auth = require("../middlwares/auth");
const admin = require("../middlwares/admin");
const {
  uploadImageSlider,
  getSliderImages,
  removeImageSlider,
} = require("../controllers/slider");

router.get("/api/products/:userId*?", getAll);
router.get("/api/procat/:catId", categoryProduct);
router.get("/api/product/:id", getOne);
router.post("/api/product", auth, create);
router.delete("/api/product/:id", auth, remove);
router.put("/api/product/:id", auth, update);
router.post("/api/product/upload/:id", auth, uploadImage);
router.post("/api/slider/upload", auth, uploadImageSlider);
router.get("/api/slider", auth, getSliderImages);
router.delete("/api/slider/:fileName", auth, removeImageSlider);
router.post("/api/product/comment/:productId", auth, addComment);
router.put("/api/product/:productId/comment/:commentId", auth, updateComment);
router.delete(
  "/api/product/:productId/comment/:commentId",
  auth,
  removeComment
);
router.post("/api/product/add-category/:productId", auth, addCategoryToProduct);
router.post(
  "/api/product/remove-category/:productId",
  auth,
  removeCategoryFromProduct
);
router.get("/api/chart", auth, chart);
router.post("/api/product/tag/:productId", auth, addTag);
router.post("/api/product/remove-tag/:productId", auth, removeTag);
router.post("/api/product/size/:productId", [auth, admin], addSize);
router.post("/api/product/remove-size/:productId", [auth, admin], removeSize);
router.get("/api/product/filter/:type", auth, filter);
router.get("/api/product-popular", auth, popular);

module.exports = router;
