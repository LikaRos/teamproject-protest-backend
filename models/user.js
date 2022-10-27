const Joi = require("joi");
const { Schema, model } = require("mongoose");

const handleMongooseSchemaError = require("../helpers/handleMongooseSchemaError");
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 16,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
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
  password: Joi.string().min(16).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(16).required(),
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
