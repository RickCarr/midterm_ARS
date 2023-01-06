// Client facing scripts here
const tableRow = (quizData) => {
  const trElement = `<tr>
  <td>
    ${quizData.id}
  </td>
  <td>
    <a href="/take/${quizData.id}">${quizData.quiz_name}</a>
  </td>
  <td>
    ${quizData.user_name}
  </td>
</tr>`;
  return trElement;
};

const question1 = (questionData) => {
  const questionElement = `
  <label>Question 1
    <br>
    <label id="question">${questionData.question}</label>
    <br>
  </label>`;
  return questionElement;
};
const question2 = (questionData) => {
  const questionElement = `
  <label>Question 2
    <br>
    <label id="question">${questionData.question}</label>
    <br>
  </label>`;
  return questionElement;
};
const question3 = (questionData) => {
  const questionElement = `
  <label>Question 3
    <br>
    <label id="question">${questionData.question}</label>
    <br>
  </label>`;
  return questionElement;
};

const answer = (answerData) => {
  const answerElement = `
  <label>Answer
    <br>
    <label id="answer">${answerData.answer}</label>
    <br>
  </label>`;
  return answerElement;
};

$(() => {
  $.ajax({
    method: 'GET',
    url: '/api/quizzes'
  })
    .then((response) => {
      const $quizList = $('#quiz-list'); //calling element bc of $('...')
      $quizList.empty();

      for (const quiz of response.quizzes) {
        const $tableRow = tableRow(quiz);
        $quizList.append($tableRow);
      }
    });

  $.ajax({
    method: 'GET',
    url: '/api/questions'
  })
    .then((response) => {
      const $q1 = question1(response.questions[0]);
      const $q2 = question2(response.questions[1]);
      const $q3 = question3(response.questions[2]);
      $('#question1').append($q1);
      $('#question2').append($q2);
      $('#question3').append($q3);
    });
  $.ajax({
    method: 'GET',
    url: '/api/answers'
  })
    .done((response) => {
      console.log(response);
      const $a1 = answer(response.answers[0]);
      const $a2 = answer(response.answers[1]);
      const $a3 = answer(response.answers[2]);
      const $a4 = answer(response.answers[3]);
      const $a5 = answer(response.answers[4]);
      const $a6 = answer(response.answers[5]);
      const $a7 = answer(response.answers[6]);
      const $a8 = answer(response.answers[7]);
      const $a9 = answer(response.answers[8]);
      const $a10 = answer(response.answers[9]);
      const $a11 = answer(response.answers[10]);
      const $a12 = answer(response.answers[11]);
      $('#answer1').append($a1);
      $('#answer2').append($a2);
      $('#answer3').append($a3);
      $('#answer4').append($a4);
      $('#answer5').append($a5);
      $('#answer6').append($a6);
      $('#answer7').append($a7);
      $('#answer8').append($a8);
      $('#answer9').append($a9);
      $('#answer10').append($a10);
      $('#answer11').append($a11);
      $('#answer12').append($a12);
    });
});
