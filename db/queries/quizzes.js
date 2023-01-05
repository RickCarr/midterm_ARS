const db = require('../connection');

const getQuizzes = () => {
  return db.query(`SELECT quizzes.id AS id, quiz_name, users.name AS user_name
                  FROM quizzes
                  JOIN users ON user_id = users.id
                  ;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getQuizzes };
