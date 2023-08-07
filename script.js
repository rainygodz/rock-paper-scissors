const resultDiv = document.querySelector('.result');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
let playerScoreCount = 0;
let computerScoreCount = 0;


const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
}


const displayResultText = (text) => {
  const prevHeading1 = resultDiv.lastChild;
  if (prevHeading1) {
    resultDiv.removeChild(prevHeading1);
  }
  
  const heading1 = document.createElement('h1');
  heading1.textContent = text;
  resultDiv.appendChild(heading1);
}


const playRound = (playerSelection) => {
  const computerSelection = getComputerChoice();
  const loseText = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const winText = `You Win! ${playerSelection} beats ${computerSelection}`;

  switch(playerSelection) {
    case 'Rock':
      if (computerSelection === 'Paper') {
        displayResultText(loseText);
        computerScore.textContent = `Computer's score: ${++computerScoreCount}`;
        break;
      } else if (computerSelection === 'Scissors') {
        displayResultText(winText);
        playerScore.textContent = `Player's score: ${++playerScoreCount}`;
        break;
      } else {
        displayResultText('Draw');
        break;
      }

    case 'Paper':
      if (computerSelection === 'Scissors') {
        displayResultText(loseText);
        computerScore.textContent = `Computer's score: ${++computerScoreCount}`;
        break;
      } else if (computerSelection === 'Rock') {
        displayResultText(winText);
        playerScore.textContent = `Player's score: ${++playerScoreCount}`;
        break;
      } else {
        displayResultText('Draw');
        break;
      }
    
    case 'Scissors':
      if (computerSelection === 'Rock') {
        displayResultText(loseText);
        computerScore.textContent = `Computer's score: ${++computerScoreCount}`;
        break;
      } else if (computerSelection === 'Paper') {
        displayResultText(winText);
        playerScore.textContent = `Player's score: ${++playerScoreCount}`;
        break;
      } else {
        displayResultText('Draw');
        break;
      }

    default:
      displayResultText("Wrong choice, try again.");
      return; 
  }

  if (playerScoreCount === 5) {
    displayResultText('Player won the game!');
    playerScoreCount = 0;
    computerScoreCount = 0;
    computerScore.textContent = `Computer's score: ${computerScoreCount}`;
    playerScore.textContent = `Player's score: ${playerScoreCount}`;
    return;
  }

  if (computerScoreCount === 5) {
    displayResultText('Computer won the game!');
    playerScoreCount = 0;
    computerScoreCount = 0;
    computerScore.textContent = `Computer's score: ${computerScoreCount}`;
    playerScore.textContent = `Player's score: ${playerScoreCount}`;
    return;
  }
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    playRound(playerSelection);
  });
});