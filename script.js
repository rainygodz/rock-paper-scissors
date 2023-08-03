const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return 'Rock';
      break;
    case 2:
      return 'Paper';
      break;
    case 3:
      return 'Scissors';
      break;
  }
}


const getPlayerChoice = () => {
  let playerSelection = prompt("Type 'Rock'/'Paper'/'Scissors'").toLowerCase();
  if (playerSelection === '') {
    return undefined;
  }

  const firstLetter = playerSelection[0];
  playerSelection = playerSelection.replace(firstLetter, firstLetter.toUpperCase());

  return playerSelection;
}


const playRound = (computerSelection, playerSelection) => {
  const loseText = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const winText = `You Win! ${playerSelection} beats ${computerSelection}`;

  switch(playerSelection) {
    case 'Rock':
      if (computerSelection === 'Paper') {
        return loseText;
      } else if (computerSelection === 'Scissors') {
        return winText;
      } else {
        return 'Draw';
      }

    case 'Paper':
      if (computerSelection === 'Scissors') {
        return loseText;
      } else if (computerSelection === 'Rock') {
        return winText;
      } else {
        return 'Draw';
      }
    
    case 'Scissors':
      if (computerSelection === 'Rock') {
        return loseText;
      } else if (computerSelection === 'Paper') {
        return winText;
      } else {
        return 'Draw';
      }

    default:
      console.log("Wrong choice, try again.");
      return; 
  }
}


const game = () => {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(computerSelection, playerSelection));
  }
}

game();