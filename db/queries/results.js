const db = require('../connection');

const getResults = () => {
  return db.query('SELECT * FROM results;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getResults };
