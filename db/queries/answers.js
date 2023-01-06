const db = require('../connection');

const getAnswers = () => {
  return db.query(`
    SELECT answer, is_correct
    FROM answers
    JOIN questions ON questions.id = answers.question_id
    JOIN quizzes ON quizzes.id = questions.quiz_id
    WHERE quizzes.id = 1
    ORDER BY answers.id
  ;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAnswers };
