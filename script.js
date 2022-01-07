const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let win = 0;
let lose = 0;
let choice;
let rounds = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const container = document.querySelector('#main');
const results = document.createElement('div');
const score = document.createElement('p');
const computerChoice = document.createElement('div');

container.appendChild(computerChoice);
container.appendChild(results);
container.appendChild(score);

function computerPlay() {
    if (Math.random() < 0.333) {
        computerChoice.textContent = "The PC chose rock";
        return rock;
    } else if (Math.random() > 0.666) {
        computerChoice.textContent = "The PC chose paper"
        return paper;
    } else {
        computerChoice.textContent = "The PC chose scissors"
        return scissors;
    }
}
function userPlay() {
    
    if (choice == "rock") {
        return rock;
    } else if (choice == "paper") {
        return paper;
    } else {
        return scissors;
    }
}

function round(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        results.textContent = "It's a tie!" ;
    } else if ((playerSelection == rock) && (computerSelection == scissors)) {
        results.textContent = "You won! Rock beats Scissors" ;
        return win++
    } else if ((playerSelection == scissors) && (computerSelection == paper)) {
        results.textContent = "You won! Scissors beat Paper";
        return win++
    } else if ((playerSelection == paper) && (computerSelection == rock)) {
        results.textContent = "You won! Paper beats Rock";
        return win++
    } else {
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        return lose++
    }
}
function game(){
    
    function score2() {
        score.textContent = `You ${win} - Computer ${lose}` ;
    }
    
    round(userPlay(), computerPlay());
    score2();
    if (rounds == 5){
    if (win > lose) {
      score.textContent =  `You ${win} - Computer ${lose} - Congratulations! You won!` ;
    } else if (win == lose){
      score.textContent = `You ${win} - Computer ${lose} -Its a tie! heeey`;
    } else {
      score.textContent = `You ${win} - Computer ${lose} - You lose! Better luck next time!`;
    }}
 

}



rockButton.addEventListener('click', () =>{
  choice = 'rock';
  rounds++;
  console.log(rounds);
  game();
})

paperButton.addEventListener('click', () =>{
  choice = 'paper';
  rounds++;
  console.log(rounds);

  game();
})

scissorsButton.addEventListener('click', () =>{
  choice = 'scissors';
  rounds++;
  console.log(rounds);
  game();
})