function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices * length)]
}

function playRound(playerSelection, computerSelection) {

  getComputerChoice()
  
  if (playerSelection === computerSelection){
    return "It's a tie!"
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors' ||
     playerSelection === 'paper' && computerSelection === 'rock' ||
     playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You won! ${playerSelection} beats ${computerSelection}!`
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}!`
  }
}
 
const playerSelection = prompt('Rock, Paper or Scissors?').toLocaleLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));