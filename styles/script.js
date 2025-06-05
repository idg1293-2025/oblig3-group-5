const answerExplanations = {
	"100 billion": "Because global e-commerce volume has grown massively — over 100 billion packages are shipped each year.",
	"Limited range for long transport journeys": "Electric trucks are improving, but many still can’t handle long distances without frequent charging.",
	"Methane (CH₄)": "Methane is a powerful greenhouse gas often released during oil extraction and is more harmful than CO₂ over short periods."
  };
  
function showQuestion(button) {
	const container = button.closest('.question-container');
	const question = container.querySelector('.question');
	const feedback = container.querySelector('.question__feedback');
  
	// Fjern 'hidden' klassen for å vise popupen
	question.classList.remove('hidden');
	feedback.classList.remove('hidden');
	
	// Skjul knappen etter at popupen vises
	button.style.display = 'none'; // Skjuler spørsmåls-knappen
  }
  
  let correctCount = 0;
let wrongCount = 0;

function checkAnswer(button) {
  const container = button.closest('.question-container');
  const feedbackElement = container.querySelector('.question__feedback');
  const correctAnswer = container.dataset.correctAnswer.trim();

  const allButtons = container.querySelectorAll('.question__answer button');
  const userAnswer = button.textContent.trim();
  feedbackElement.classList.remove('hidden'); 

  allButtons.forEach(btn => btn.classList.remove('correct', 'incorrect'));

  const alreadyAnswered = container.dataset.answered === "true";

  if (userAnswer === correctAnswer) {
	button.classList.add('correct');
	const explanation = answerExplanations[correctAnswer] || "";
	feedbackElement.innerHTML = `✅ Correct! 🎉<br><small>${explanation}</small>`;
	feedbackElement.style.color = 'green';
  
	// Tell bare poeng hvis det er første gang brukeren svarer riktig
	if (!alreadyAnswered) {
	  correctCount++;
	  container.dataset.answered = "true"; // Lås spørsmålet etter riktig svar
	}
  
	// Deaktiver alle knapper etter riktig svar
	allButtons.forEach(btn => btn.disabled = true);
  }
  
  
 	else {
    	button.classList.add('incorrect');
    	feedbackElement.textContent = 'Wrong, try again!';
    	feedbackElement.style.color = 'red';

    // Tell feil KUN ved første forsøk
    if (!alreadyAnswered) {
      wrongCount++;
      container.dataset.answered = "false"; // Fortsatt lov å prøve igjen
      container.dataset.firstAttemptDone = "true";
    }
  }

  // Oppdater scoreboard
  const scoreboard = document.getElementById('scoreboard');
  if (scoreboard) {
    scoreboard.textContent = `Correct: ${correctCount} | Wrong: ${wrongCount}`;
  }
}

function closeQuestion(closeButton) {
	const container = closeButton.closest('.question-container');
	const question = container.querySelector('.question');
	const questionButton = container.querySelector('.question-button');
	const feedback = container.querySelector('.question__feedback');
  
	// Skjul spørsmålet og vis spørsmåls-knappen igjen
	question.classList.add('hidden');
	questionButton.style.display = 'inline-block';
  
	// Skjul tilbakemeldingsteksten
	feedback.classList.add('hidden');
  }
  // Scroll-knapp vises etter at man har scrollet 300px ned
window.onscroll = function() {
	const btn = document.getElementById("scrollTopBtn");
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
	  btn.style.display = "block";
	} else {
	  btn.style.display = "none";
	}
  };
  
  function scrollToTop() {
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	});
  }
  