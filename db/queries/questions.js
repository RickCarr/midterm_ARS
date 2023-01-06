const db = require('../connection');

const getQuestions = () => {
  return db.query('SELECT question FROM questions;')
    .then(data => {
      return data.rows;
    });
};

const getQuestionsByQuizID = (quizID) => {
  return db.query(`SELECT question
                     FROM questions
                     JOIN quizzes ON quizzes.id = questions.quiz_id
                     WHERE questions.quiz_id = $1
                     GROUP By question
                    ORDER BY answers.id
                  ;`, [quizID])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getQuestions, getQuestionsByQuizID };
