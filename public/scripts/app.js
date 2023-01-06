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
</tr>`
return trElement;
};

const questionRow = (questionData) => {
  const questionElement = `
  <label>Question</label>
  <a id="question">${questionData.question}</a>
  <br>`

return questionElement;
}


$(() => {
  $.ajax({
    method: 'GET',
    url: '/api/quizzes'
  })
  .done((response) => {
    const $quizList = $('#quiz-list'); //calling element bc of $('...')
    $quizList.empty();

    for(const quiz of response.quizzes) {
      const $tableRow = tableRow(quiz);
      $quizList.append($tableRow);
    }
  });

  $.ajax({
    method: 'GET',
    url: '/api/questions'
  })
  .done((response) => {
    console.log(response);
    const $questionList = $('#question-list'); //calling element bc of $('...')
    $questionList.empty();

    for(const question of response.questions) {
      const $questionRow = questionRow(question);
      $questionList.append($questionRow);
    }
  });
});
