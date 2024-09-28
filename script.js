const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const resultText = document.getElementById('result-text');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    updateScore(result);
    showResult(playerChoice, computerChoice, result);
  });
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function updateScore(result) {
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function showResult(playerChoice, computerChoice, result) {
  let message = `You chose ${playerChoice}, computer chose ${computerChoice}. `;
  if (result === 'win') {
    message += "You win!";
  } else if (result === 'lose') {
    message += "You lose!";
  } else {
    message += "It's a draw!";
  }
  resultText.textContent = message;
}
