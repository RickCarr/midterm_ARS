const db = require('../connection');

const getAnswers = () => {
  return db.query('SELECT * FROM answers;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAnswers };
