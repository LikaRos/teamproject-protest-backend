const express = require("express");
const ctrl = require("../../controllers/questions");
const { ctrlWrapper } = require("../../helpers");
// const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/:type/random", ctrlWrapper(ctrl.getRandomQuestions));

router.post("/result", ctrlWrapper(ctrl.getResults));

module.exports = router;
