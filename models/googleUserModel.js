const mongoose = require("mongoose");
const { Schema } = mongoose.model;
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
const UserGoogle = mongoose.model("UserGoogle", GoogleAuthSchema);
module.exports = UserGoogle;
