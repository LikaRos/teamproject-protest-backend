const { Question } = require("../../models/question");

const getRandomQuestions = async (req, res) => {
  const result = await Question.aggregate([
    { $match: { type: "tech" } },
    { $sample: { size: 12 } },
  ]);

  res.status(201).json(result);
};

module.exports = getRandomQuestions;
