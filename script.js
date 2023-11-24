
console.log(computer);
console.log(playRound(player, computer))

//Correto!
function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)]
}

//Correto!
function playRound(playerSelection, computerSelection) {
  
}

function game(){
  let playerScore = 0
  let computerScore = 0

  for (let round = 1; round <= 5; round++){
    let player = 'rock'
    let computer = getComputerChoice();

    console.log(`Round: ${round}`);
    console.log(`Player Selection: ${player}`);
    console.log(`Computer Selection: ${computer}`);

    let result = playRound(player, computer)
    console.log(result)

    if (result.includes('You Won!')){
      playerScore++
    } else if (result.includes('You lost!')){
      computerScore++
    }
  }
}