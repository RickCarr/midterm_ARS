const db = require('../connection');

const getQuizzes = () => {
  return db.query(`
    SELECT quizzes.id AS id, quiz_name, users.name AS user_name
    FROM quizzes
    JOIN users ON user_id = users.id
    ORDER by id DESC
    ;`)
    .then(data => {
      return data.rows;
    });
};

// const getQuizByID = (quizID) => {
//   return db.query(`SELECT questions.question AS question
//                      FROM questions
//                      JOIN answers ON questions.id = question_id
//                      JOIN quizzes ON quizzes.id = questions.quiz_id
//                      WHERE questions.quiz_id = $1
//                      GROUP By question
//                     ORDER BY answers.id
//                   ;`, [quizID])
//     .then(data => {
//       return data.rows;
//     });
// };

module.exports = { getQuizzes/*, getQuizByID */};
