/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const answerQueries = require('../db/queries/answers');

router.get('/', (req, res) => {
  answerQueries.getAnswers()
    .then(answers => {
      res.json({ answers });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

module.exports = router;
