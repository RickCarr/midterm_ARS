// Client facing scripts here
const tableRow = (quizData) => {
  const trElement = `<tr>
  <td>
    <a>${quizData.id}</a>
  </td>
  <td>
    <a>${quizData.quiz_name}</a>
  </td>
  <td>
    <a>${quizData.user_name}</a>
  </td>
</tr>`
return trElement;
};

$(() => {
  $.ajax({
    method: 'GET',
    url: '/api/quizzes'
  })
  .done((response) => {
    console.log(response);
    const $quizList = $('#quiz-list'); //calling element bc of $('...')
    $quizList.empty();

    for(const quiz of response.quizzes) {
      const $tableRow = tableRow(quiz);
      $quizList.append($tableRow);
    }
  });
});
