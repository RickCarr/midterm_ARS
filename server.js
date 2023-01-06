// load .env data into process.env
require('dotenv').config();
const dbQuery = require('./db/connection')

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const usersRoutes = require('./routes/users');
const questionsApiRoutes = require('./routes/questions-api');
const questionsRoutes = require('./routes/questions');
const quizzesApiRoutes = require('./routes/quizzes-api');
const quizzesRoutes = require('./routes/quizzes');
const answersApiRoutes = require('./routes/answers-api');
const answersRoutes = require('./routes/answers');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/users', usersRoutes);
app.use('/api/questions', questionsApiRoutes);
app.use('/questions', questionsRoutes);
app.use('/api/quizzes', quizzesApiRoutes);
app.use('/quizzes', quizzesRoutes);
app.use('/api/answers', answersApiRoutes);
app.use('/answers', answersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/create', (req, res) => {
  res.render('create_quiz');
});

app.post('/quizzes', (req, res) => {
  const userName = req.body.name
  dbQuery.query('INSERT INTO users (name) VALUES ($1) RETURNING id', [userName])
  .then((response) => {
    console.log(response)
    const quizName = req.body['quiz-title'];
    const isPrivate = req.body.private === 'yes' ? true : false;
    const userID = response.rows[0].id;
    console.log(req.body)
    return dbQuery.query('INSERT INTO quizzes (quiz_name, is_private, user_id) VALUES ($1, $2, $3) RETURNING id',[quizName, isPrivate, userID]);
  })
  .then((response) => {
    console.log(response)
    const quizID = response.rows[0].id;
    const q1Promise = dbQuery.query('INSERT INTO questions (quiz_id, question) VALUES($1, $2) RETURNING id', [quizID, req.body.question1]);
    const q2Promise = dbQuery.query('INSERT INTO questions (quiz_id, question) VALUES($1, $2) RETURNING id', [quizID, req.body.question2]);
    const q3Promise = dbQuery.query('INSERT INTO questions (quiz_id, question) VALUES($1, $2) RETURNING id', [quizID, req.body.question3])
    const promises = [q1Promise, q2Promise, q3Promise];
    return Promise.all(promises)
  })
  .then((response) => {
    console.log(response)
    const q1ID = response[0].rows[0].id;
    const q2ID = response[1].rows[0].id;
    const q3ID = response[2].rows[0].id;
    const q1a1Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q1ID, req.body.q1a1, req.body.q1a1isCorrect ? true : false]);
    const q1a2Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q1ID, req.body.q1a2, req.body.q1a2isCorrect ? true : false]);
    const q1a3Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q1ID, req.body.q1a3, req.body.q1a3isCorrect ? true : false]);
    const q1a4Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q1ID, req.body.q1a4, req.body.q1a4isCorrect ? true : false]);

    const q2a1Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q2ID, req.body.q2a1, req.body.q2a1isCorrect ? true : false]);
    const q2a2Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q2ID, req.body.q2a2, req.body.q2a2isCorrect ? true : false]);
    const q2a3Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q2ID, req.body.q2a3, req.body.q2a3isCorrect ? true : false]);
    const q2a4Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q2ID, req.body.q2a4, req.body.q2a4isCorrect ? true : false]);

    const q3a1Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q3ID, req.body.q3a1, req.body.q3a1isCorrect ? true : false]);
    const q3a2Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q3ID, req.body.q3a2, req.body.q3a2isCorrect ? true : false]);
    const q3a3Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q3ID, req.body.q3a3, req.body.q3a3isCorrect ? true : false]);
    const q3a4Promise = dbQuery.query('INSERT INTO answers (question_id, answer, is_correct) VALUES($1, $2, $3)',[q3ID, req.body.q3a4, req.body.q3a4isCorrect ? true : false]);

    const promises = [q1a1Promise, q1a2Promise, q1a3Promise, q1a4Promise, q2a1Promise, q2a2Promise, q2a3Promise, q2a4Promise, q3a1Promise, q3a2Promise, q3a3Promise, q3a4Promise]
    return Promise.all(promises)
  })
  .then(() => {res.redirect('/')})
})

app.get('/take/:id', (req, res) => {
  console.log('taking quiz', req.params.id);
  res.render('take_quiz');
});

app.get('/results', (req, res) => {
  res.render('results');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
