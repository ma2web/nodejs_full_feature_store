const Joi = require("joi");

Joi.objectId = require("joi-objectid")(Joi);

module.exports = {
  createValidator: (data) => {
    const schema = Joi.object({
      items: Joi.array(),
    });

    return schema.validate(data);
  },
  updateValidator: (data) => {
    const schema = Joi.object({
      id: Joi.objectId(),
      status: Joi.string(),
      items: Joi.array(),
    });

    return schema.validate(data);
  },
};
