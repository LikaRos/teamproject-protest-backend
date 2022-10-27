const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleSaveErrors } = require("../middlewares");

const questionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
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
      unique: true,
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

const updateRightAnswerSchema = {};

const schemas = {
  updateRightAnswerSchema,
};
const Question = model("question", "questionSchema");
module.exports = {
  Question,
  schemas,
};
