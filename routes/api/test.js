const express = require("express");
const ctrl = require("../../controllers/tests");
// const { ctrlWrapper } = require("../../helpers");
// const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/test");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
