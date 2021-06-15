const Joi = require("joi");

Joi.objectId = require("joi-objectid")(Joi);

module.exports = {
  createValidator: (data) => {
    const schema = Joi.object({
      store: Joi.string(),
      customer: Joi.objectId(),
      items: Joi.array(),
    });

    return schema.validate(data);
  },
  updateValidator: (data) => {
    const schema = Joi.object({
      status: Joi.string(),
      items: Joi.array(),
    });

    return schema.validate(data);
  },
};
