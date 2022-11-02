const { Question } = require("../../models/question");

const getRandomQuestions = async (req, res) => {
  const { type } = req.params;
  const result = await Question.aggregate([{ $match: { type: `${type}` } }, { $sample: { size: 12 } }]);
  const unswers = result.map((el) => {
    delete el.rightAnswer;
    return el;
  });
  console.log("unswers", unswers);

  res.status(201).json(result);
};

module.exports = getRandomQuestions;
