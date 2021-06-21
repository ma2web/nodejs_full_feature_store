const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports = {
  loginValidator: (data) => {
    const schema = Joi.object({
      // countryCode: Joi.string().required(),
      // phoneNumber: Joi.string().required().max(10).min(10),
      password: Joi.string().required(),
      email: Joi.string().required(),
    });

    return schema.validate(data);
  },
  registerValidator: (data) => {
    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().required(),
      countryCode: Joi.string().required(),
      phoneNumber: Joi.string().required().max(10).min(10),
      password: Joi.string().required(),
      role: Joi.string().required(),
      store: Joi.object(),
    });

    return schema.validate(data);
  },
  userRegisterValidator: (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      phoneNumber: Joi.string().required().max(10).min(10),
      password: Joi.string().required(),
    });

    return schema.validate(data);
  },
  userLoginValidator: (data) => {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });

    return schema.validate(data);
  },
};
