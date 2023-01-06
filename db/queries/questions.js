const db = require('../connection');

const getQuestions = () => {
  return db.query('SELECT question FROM questions;')
    .then(data => {
      return data.rows;
    });
};

const getQuestionsByQuizID = (quizID) => {
  return db.query(`
    SELECT question, (SELECT quizzes.id)
    FROM questions
    JOIN quizzes ON quizzes.id = questions.quiz_id
    WHERE questions.quiz_id = $1
    ORDER BY questions.id
    ;`, [quizID])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getQuestions, getQuestionsByQuizID };
