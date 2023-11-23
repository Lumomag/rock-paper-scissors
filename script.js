function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices * length)]
}

function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));