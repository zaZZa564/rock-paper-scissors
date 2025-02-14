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

function playRound(humanChoice, computerChoice) {
  switch(humanChoice) {
    case 'rock':
      switch(computerChoice) {
        case 'rock':
          console.log('Draw');
          break;
        case 'paper':
          console.log('You lose! paper beats rock');
          computerScore++;
          break;
        case 'scissors':
          console.log('You win! rock beats scissors');
          humanScore++;
          break;
      }
    case 'paper':
      switch(computerChoice) {
        case 'rock':
          console.log('You win! rock beats paper');
          humanScore++;
          break;
        case 'paper':
          console.log('Draw');
          break;
        case 'scissors':
          console.log('You lose! scissors beat paper');
          computerScore++;
          break;
      }
    case 'scissors':
      switch(computerChoice) {
        case 'rock':
          console.log('You lose! rock beats scissors');
          computerScore++;
          break;
        case 'paper':
          console.log('You win! scissors beat paper');
          humanScore++;
          break;
        case 'scissors':
          console.log('Draw');
          break;
      }
  }
}

let humanScore = 0;
let computerScore = 0;