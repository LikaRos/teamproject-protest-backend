const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleSaveErrors } = require("../middlewares");

const testSchema = new Schema(
  {
    /*Заполнить*/
  },
  { versionKey: false, timestamps: true }
);
const schemas = {
  /*Заполнить*/
};
const Test = model("test", "testSchema");
module.exports = {
  Test,
  schemas,
};
