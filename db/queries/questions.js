const db = require('../connection');

const getQuestions = () => {
  return db.query('SELECT * FROM questions;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getQuestions };
