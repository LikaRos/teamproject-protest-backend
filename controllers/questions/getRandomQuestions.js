const { Question } = require("../../models/question");

const getRandomQuestions = async (req, res) => {
  const { type } = req.params;
  const result = await Question.aggregate([
    { $match: { type: `${type}` } },
    { $sample: { size: 12 } },
  ]);
  console.log(req.params);

  res.status(201).json(result);
};

module.exports = getRandomQuestions;
