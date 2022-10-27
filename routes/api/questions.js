const express = require("express");
const ctrl = require("../../controllers/questions");
const { ctrlWrapper } = require("../../helpers");
// const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/question");

const router = express.Router();

router.get("/:type/random", ctrlWrapper(ctrl.getRandomQuestions));
<<<<<<< Updated upstream
router.get("/result", ctrlWrapper(ctrl.getResults));
// localhost:3001/api/questions/tech/random
=======
router.get("/result", ctrlWrapper(ctrl.getRandomQuestions));
//localhost:3001/api/questions/tech/random
>>>>>>> Stashed changes
// localhost:3001/api/questions/theory/random;

module.exports = router;
