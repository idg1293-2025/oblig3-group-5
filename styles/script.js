function showQuestion() {
    const question = document.querySelector('.question');
    question.style.display = 'block';
  }
  
  function checkAnswer(answer) {
    const feedbackElement = document.getElementsByClassName('feedback__1')[0];
    if (answer === 'd') {
      feedbackElement.textContent = 'Wow, correct!';
      feedbackElement.style.color = 'green';
    } else {
      feedbackElement.textContent = 'That is wrong, try again!';
      feedbackElement.style.color = 'red';
    }
  }
  