const Joi = require("joi");

Joi.objectId = require("joi-objectid")(Joi);

module.exports = {
  createValidator: (data) => {
    const schema = Joi.object({
      user: Joi.objectId(),
      name: Joi.string(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      discount: Joi.number(),
      images: Joi.array().items(Joi.string()),
      categories: Joi.array().items(Joi.string()),
      colors: Joi.array(),
      sizes: Joi.array(),
      tags: Joi.array().items(Joi.string()),
      inStock: Joi.boolean(),
      stock: Joi.number(),
    });

    return schema.validate(data);
  },
  updateValidator: (data) => {
    const schema = Joi.object({
      name: Joi.string(),
      createdAt: Joi.string(),
      updatedAt: Joi.string(),
      images: Joi.array().items(Joi.string()),
      description: Joi.string(),
      price: Joi.number(),
      sold: Joi.number(),
      inStock: Joi.boolean(),
      sizes: Joi.array(),
      colors: Joi.array(),
      id: Joi.objectId(),
      _id: Joi.objectId(),
      __v: Joi.number(),
      user: Joi.objectId(),
      stock: Joi.number(),
      tags: Joi.array().items(Joi.string()),
      comments: Joi.array().items(Joi.string()),
      categories: Joi.array().items(Joi.string()),
      discount: Joi.number(),
      view: Joi.number(),
    });

    return schema.validate(data);
  },
};
