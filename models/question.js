const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleSaveErrors } = require("../middlewares");

const questionSchema = new Schema(
  {
    question: {
      type: String,
      required: String,
    },
    questionId: {
      type: String,
      required: true,
    },
    answers: {
      type: [],
      required: true,
    },
    rightAnswer: {
      type: String,
      required: true,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

questionSchema.post("save", handleSaveErrors);

const updateAnswerSchema = Joi.object({
  rightAnswer: Joi.string().required(),
  questionId: Joi.string().required(),
});
const schemas = {
  updateAnswerSchema,
};

const Question = model("question", questionSchema);

module.exports = {
  Question,
  schemas,
};
