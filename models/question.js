const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleSaveErrors } = require("../middlewares");

const questionSchema = new Schema(
  {
    question: {
      type: [String],
      required: true,
      unique: true,
    },

    answers: {
      type: String,
      required: true,
    },
    rightAnswer: {
      type: String,
      required: true,
      default: null,
    },

    type: {
      type: String,
      required: true,
      enum: ["tech", "theory"],
    },
  },
  { versionKey: false, timestamps: true }
);

questionSchema.post("save", handleSaveErrors);

const loadSchema = Joi.object({
  question: Joi.string().required(),
  answers: Joi.array().required(),
  rightAnswer: Joi.string().required(),
  type: Joi.string().required(),
});

const updateQuestionSchema = Joi.object({
  rightAnswer: Joi.string().required(),
});
const schemas = {
  loadSchema,
  updateQuestionSchema,
};

const Question = model("question", questionSchema);

module.exports = {
  Question,
  schemas,
};
