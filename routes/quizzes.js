/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('quizzes', quizzes);
});

// mentor advised alterations -unclear of neccessity-
// router.get('/', (req, res) => {
//   quizzesQueries.getUsers()
//     .then(quiz => {
//       res.render('quizzes', quizzes)
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

module.exports = router;
