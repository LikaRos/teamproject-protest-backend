const Joi = require("joi");
const { Schema, model } = require("mongoose");

const handleMongooseSchemaError = require("../helpers/handleMongooseSchemaError");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [false],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [false],
      minlength: 16,
    },
    avatarURL: {
      type: String,
      required: [true, "avatar required"],
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [false],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleMongooseSchemaError);

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  emailSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
