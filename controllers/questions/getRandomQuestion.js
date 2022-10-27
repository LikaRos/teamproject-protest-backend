const { Question } = require("../../models/question");
/*
Model.find()
  .skip((pageNumber - 1) * limit)
  .limit(limit)
  .exec();
*/
/* Добавить функцию  Math.random()*/
const getRandomQuestion = async (req, res) => {
  const { page = 1, limit = 1 } = req.query;
  const skip = (page - 1) * limit;
  const total = 12;
  const result = await Question.find(req.user, "-createdAt -updatedAt", {
    skip,
    limit,
    total,
  });

  res.json(result);
};

module.exports = getRandomQuestion;
