const { Question } = require("../../models/question");

const getRandomQuestions = async (req, res) => {
  const { type } = req.params;

  const prevResult = await Question.aggregate([
    { $match: { type: `${type}` } },
    { $sample: { size: 12 } },
  ]);
  const result = prevResult.map((el) => {
    delete el.rightAnswer;
    return el;
  });

  res.status(201).json(result);
};

module.exports = getRandomQuestions;
