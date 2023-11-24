


function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
    return "\n\t\tIt's a tie!"
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
     (playerSelection === 'paper' && computerSelection === 'rock') ||
     (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `\n\t\tYou won! ${playerSelection} beats ${computerSelection}!`
  } else {
    return `\n\t\tYou lost! ${computerSelection} beats ${playerSelection}!`
  }
}

function game(){
  let playerScore = 0
  let computerScore = 0

  for (let round = 1; round <= 5; round++){
    let player = prompt('Rock, Paper or Scissors?')
    let computer = getComputerChoice();

    console.log(`\nRound: ${round}`);
    console.log(`\t\tPlayer Selection: ${player}`);
    console.log(`\t\tComputer Selection: ${computer}`);

    let result = playRound(player, computer)
    console.log(result)

    if (result.includes('You won!')){
      playerScore++
    } else if (result.includes('You lost!')){
      computerScore++
    }
  }

  console.log('\n---- Final result ----\n')
  console.log(`\tPlayer Score: ${playerScore}`);
  console.log(`\tComputer Score: ${computerScore}\n`);

  if (playerScore > computerScore){
    console.log('\tYou won the game!!!')
  } else if (playerScore < computerScore){
    console.log('\tYou lost the game! ;-;')
  } else {
    console.log("\tIt's a draw!")
  }
}

game()