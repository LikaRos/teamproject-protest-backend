const express = require("express");
const ctrl = require("../../controllers/questions");
const { ctrlWrapper } = require("../../helpers");
// const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/question");

const router = express.Router();

router.get("/:type/random", ctrlWrapper(ctrl.getRandomQuestions));

module.exports = router;
