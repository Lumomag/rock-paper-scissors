let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "\n\t\tIt's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `\n\t\tYou won! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `\n\t\tYou lost! ${computerSelection} beats ${playerSelection}!`;
  }
}

function game(playerSelection) {

  let player = playerSelection;
  let computer = getComputerChoice();

  roundResult.innerHTML += `<p>Player Selection: ${player}</p>`;
  roundResult.innerHTML += `<p>Computer Selection: ${computer}</p>`;

  let result = playRound(player, computer);
  roundResult.innerHTML += result;

  if (result.includes("You won!")) {
    playerScore++;
  } else if (result.includes("You lost!")) {
    computerScore++;
  }
  
  updateScore();
  
  if (playerScore === 5) {
    roundResult.innerHTML += "\n\tYou won the game!!!";
    resetGame();
  } else if (computerScore === 5) {
    roundResult.innerHTML += "\tYou lost the game! ;-;";
    resetGame();
  } 
}

function resetGame(){
  playerScore = 0;
  computerScore = 0;
}

function updateScore(){
  roundResult.innerHTML += "<p>---- Score (up to 5) ----</p>";
  roundResult.innerHTML += `<p>Player Score: ${playerScore}</p>`;
  roundResult.innerHTML += `<p>Computer Score: ${computerScore}</p>`;

}

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");
const roundResult = document.querySelector(".result");

rockButton.addEventListener("click", () => {
  roundResult.innerHTML = "";
  game("Rock");
  // roundResult.innerHTML = (playRound('rock', getComputerChoice()));
});

paperButton.addEventListener("click", () => {
  roundResult.innerHTML = "";
  game("Paper");
  //roundResult.innerHTML = (playRound('paper', getComputerChoice()));
});

scissorsButton.addEventListener("click", () => {
  roundResult.innerHTML = "";
  game("Scissors");
  //roundResult.innerHTML = (playRound('scissors', getComputerChoice()));
});
