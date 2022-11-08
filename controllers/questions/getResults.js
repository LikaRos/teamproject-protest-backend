const { Question } = require("../../models/question");
const { RequestError } = require("../../helpers");

const getResults = async (req, res) => {
  const answers = req.body;

  if (!Object.keys(answers).length) {
    throw RequestError(404);
  }

  const ids = answers.map(({ id }) => id);

  const questions = await Question.find({ _id: { $in: ids } });

  const rightAnswers = questions.map(({ rightAnswer, _id }) => ({
    rightAnswer,
    _id,
  }));

  const themeOfTests = questions[0].type;

  const rightAnswersQuantity = answers.reduce((acc, answer) => {
    const checkAnswer = questions.find(
      (question) => String(question._id) === answer.id
    );

    if (checkAnswer && checkAnswer.rightAnswer === answer.answer) {
      acc += 1;
    }
    return acc;
  }, 0);

  const result = {
    questionsQuantity: questions.length,
    rightAnswersQuantity,
    themeOfTests,
    rightAnswers,
  };
  console.log(result);
  res.json(result);
};

module.exports = getResults;
