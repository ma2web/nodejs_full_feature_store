const Joi = require("joi");

Joi.objectId = require("joi-objectid")(Joi);

module.exports = {
  createValidator: (data) => {
    const schema = Joi.object({
      // user: Joi.objectId(),
      name: Joi.string().required(),
      description: Joi.string(),
      image: Joi.string(),
    });

    return schema.validate(data);
  },
  updateValidator: (data) => {
    const schema = Joi.object({
      // user: Joi.objectId(),
      name: Joi.string().required(),
      description: Joi.string(),
      image: Joi.string(),
      id: Joi.objectId(),
    });

    return schema.validate(data);
  },
};
