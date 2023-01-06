// const db = require('../connection');

// const getQuestions = () => {
//   return db.query(`SELECT questions.question AS question, answers.answer as answer
//                   FROM questions
//                   JOIN answers ON questions.id = question_id
//                   GROUP By question
//                   ORDER BY answers.id
//                   ;`)
//     .then(data => {
//       return data.rows;
//     });
// };

// module.exports = { getQuizzes };

//   WHERE questions.id = ${ quizID; } how do we get the specific quiz on the page ?;

//this was added by mentor on server.js

// const quizQueries = require('./db/queries/quizzes');
// app.get('/take/:id', (req, res) => {
//   console.log('taking quiz', req.params.id);
//   quizQueries.getQuizzes()
//     .then(quizzes => {
//       res.render('take_quiz', {quizzes});
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });
