function openModal() {
  document.querySelector('.modal').classList.remove('hidden');
}

function closeModal() {
  document.querySelector('.modal').classList.add('hidden');
}

function checkAnswer(button) {
  const container = button.closest('.modal-content');
  const feedbackElement = container.querySelector('.question__feedback');
  const correctAnswer = container.querySelector('.question').getAttribute('data-correct-answer');

  const allButtons = container.querySelectorAll('.question__answer button');
  allButtons.forEach(btn => btn.classList.remove('correct', 'incorrect'));

  const userAnswer = button.textContent.trim();
  const isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    button.classList.add('correct');
    feedbackElement.textContent = 'Correct! 🎉';
    feedbackElement.style.color = 'green';
  } else {
    button.classList.add('incorrect');
    feedbackElement.textContent = 'Wrong, try again!';
    feedbackElement.style.color = 'red';
  }
}
