let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

function computerChoice() {
  let rand = Math.random();
  if(rand < 0.333) {
    return 'rock';
  }
  else if(rand < 0.666) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

function humanChoice() {
  return prompt('Choose Option').toLowerCase();
}

function displayScore() {
  console.log(`Your score is: ${humanScore}`);
  console.log(`Computer score is: ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
  switch(humanChoice) {
    case 'rock':
      switch(computerChoice) {
        case 'rock':
          console.log('Draw');
          displayScore();
          break;
        case 'paper':
          console.log('You lose! paper beats rock');
          computerScore++;
          displayScore();
          break;
        case 'scissors':
          console.log('You win! rock beats scissors');
          humanScore++;
          displayScore();
          break;
      }
    break;
    case 'paper':
      switch(computerChoice) {
        case 'rock':
          console.log('You win! rock beats paper');
          humanScore++;
          displayScore();
          break;
        case 'paper':
          console.log('Draw');
          displayScore();
          break;
        case 'scissors':
          console.log('You lose! scissors beat paper');
          computerScore++;
          displayScore();
          break;
      }
    break;
    case 'scissors':
      switch(computerChoice) {
        case 'rock':
          console.log('You lose! rock beats scissors');
          computerScore++;
          displayScore();
          break;
        case 'paper':
          console.log('You win! scissors beat paper');
          humanScore++;
          displayScore();
          break;
        case 'scissors':
          console.log('Draw');
          displayScore();
          break;
      }
    break;
  }
}

// game process
while(humanScore != 5 || computerScore != 5) {
  humanSelection = humanChoice();
  computerSelection = computerChoice();
  playRound(humanSelection, computerSelection);
}

function testFunction(a, b) {
  return a + b;
}