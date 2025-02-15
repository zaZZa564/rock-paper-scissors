let humanScore = 0;
let computerScore = 0;

function computerChoice() {
  let rand = Math.random();
  const computerSelection = document.querySelector('.computerSelection');
  if(rand < 0.333) {
    computerSelection.innerHTML = '<img src="./img/rock.png" alt="rock" class="computerImg">';
    return 'rock';
  }
  else if(rand < 0.666) {
    computerSelection.innerHTML = '<img src="./img/paper.png" alt ="paper" class="computerImg">';
    return 'paper';
  }
  else {
    computerSelection.innerHTML = '<img src="./img/scissors.png" alt ="scissors" class="computerImg">';
    return 'scissors';
  }
}

function humanChoice() {
  return prompt('Choose Option').toLowerCase();
}

function displayScore() {
  const humanScoreDiv = document.querySelector('.humanScore');
  humanScoreDiv.textContent = `Your score is: ${humanScore}`;
  const computerScoreDiv = document.querySelector('.computerScore');
  computerScoreDiv.textContent = `Computer score is: ${computerScore}`;
}

const resultDiv = document.querySelector('.result');
function playRound(humanChoice, computerChoice) {
  switch(humanChoice) {
    case 'rock':
      switch(computerChoice) {
        case 'rock':
          resultDiv.textContent = 'Draw';
          displayScore();
          break;
        case 'paper':
          resultDiv.textContent = 'You lose! paper beats rock';
          computerScore++;
          displayScore();
          break;
        case 'scissors':
          resultDiv.textContent = 'You win! rock beats scissors';
          humanScore++;
          displayScore();
          break;
      }
    break;
    case 'paper':
      switch(computerChoice) {
        case 'rock':
          resultDiv.textContent = 'You win! paper beats rock';
          humanScore++;
          displayScore();
          break;
        case 'paper':
          resultDiv.textContent = 'Draw';
          displayScore();
          break;
        case 'scissors':
          resultDiv.textContent = 'You lose! scissors beat paper';
          computerScore++;
          displayScore();
          break;
      }
    break;
    case 'scissors':
      switch(computerChoice) {
        case 'rock':
          resultDiv.textContent = 'You lose! rock beats scissors';
          computerScore++;
          displayScore();
          break;
        case 'paper':
          resultDiv.textContent = 'You win! scissors beat paper';
          humanScore++;
          displayScore();
          break;
        case 'scissors':
          resultDiv.textContent = 'Draw';
          displayScore();
          break;
      }
    break;
  }
}

// game process
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    let humanSelection = this.querySelector('img').alt;
    let computerSelection2 = computerChoice();
    playRound(humanSelection, computerSelection2);
  });
});