  function computerPlay(){
    let randomSelect = Math.floor(Math.round() * 3);
    if (randomSelect === 0){
        return 'rock';}
        else if (randomSelect === 1){
             return 'paper' }
    else if (randomSelect === 2){ 
        return 'scissors' } }; 

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
    return 'it\' a draw!';
} else if(playerSelection === 'rock') {
    if(computerSelection === 'paper') {
        return 'computer wins!'
    } else {
        return 'you win!'
    }
} else if(playerSelection === 'paper') {
    if(computerSelection === 'scissors') {
        return 'computer wins!'
    } else {
        return 'you wins!'
    }
} else if(playerSelection === 'scissors') {
    if(computerSelection === 'rock') {
        return 'computer wins!'
    } else {
        return 'you win!'
    }
  }
}

function Game(){
playerSelection = prompt('Please Input rock, paper, or scissors');
computerSelection = computerPlay();
let finalScore = playRound(playerSelection, computerSelection);
console.log(`you threw ${playerSelection}`); 
console.log(`computer threw ${computerSelection}`);
console.log(finalScore);
}

Game();