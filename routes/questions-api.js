/*
 * All routes for quizzes Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const questionQueries = require('../db/queries/questions');

router.get('/', (req, res) => {
  questionQueries.getUsers()
    .then(questions => {
      res.json({ questions });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
