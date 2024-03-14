let playerScore = 0;
let computerScore = 0;
//function to generate randomly a string between ROCK, PAPER, SCISSORS
function getComputerChoice() {
  let rockPaperScissorsArray = ["ROCK", "PAPER", "SCISSORS"];

  let computerChoice = rockPaperScissorsArray[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  //making playerSeledtion case-insensitive
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computerScore++;
    console.log(
      `you Lose! ${computerSelection} beats ${playerSelection}, computerScore: ${computerScore} `
    );
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerScore++;
    console.log(
      `you Lose! ${computerSelection} beats ${playerSelection}, computerScore: ${computerScore}`
    );
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore++;
    console.log(
      `you Win! ${playerSelection} beats ${computerSelection}, playerScore: ${playerScore}`
    );
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore++;
    console.log(
      `you Win! ${playerSelection} beats ${computerSelection} playerScore: ${playerScore}`
    );
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore++;
    console.log(
      `you Win! ${playerSelection} beats ${computerSelection} playerScore: ${playerScore}`
    );
  } else {
    console.log("its a tie");
  }
}

function playGame() {
  for (let round = 0; round < 5; round++) {
    userInput = prompt("Your turn");
    playRound(userInput, getComputerChoice());
  }
}
