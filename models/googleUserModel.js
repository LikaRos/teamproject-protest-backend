const { Schema, model } = require("mongoose");

const GoogleAuthSchema = new Schema({
  google: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
});
const UserGoogle = model("UserGoogle", GoogleAuthSchema);
module.exports = UserGoogle;
