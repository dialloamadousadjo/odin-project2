let playerScore = 0;
let computerScore = 0;
const divResults = document.createElement("div");

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();

  if (!["ROCK", "PAPER", "SCISSORS"].includes(playerSelection)) {
    displayResult("Invalid choice. Please choose ROCK, PAPER, or SCISSORS.");
    return;
  }

  displayResult(
    `Player chooses ${playerSelection}. Computer chooses ${computerSelection}.`
  );

  if (playerSelection === computerSelection) {
    displayResult("It's a tie!");
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    displayResult(`You win! ${playerSelection} beats ${computerSelection}.`);
    playerScore++;
  } else {
    displayResult(`You lose! ${computerSelection} beats ${playerSelection}.`);
    computerScore++;
  }

  updateScoreDisplay();
}

function displayResult(message) {
  const resultsDiv = document.querySelector("#results");
  const resultParagraph = document.createElement("p");
  resultParagraph.textContent = message;
  resultsDiv.appendChild(resultParagraph);
}

function updateScoreDisplay() {
  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function announceWinner() {
  if (playerScore > computerScore) {
    divResults.textContent = `Congratulations! player win the game!`;
  } else {
    divResults.textContent = `Congratulations! win computer the game!`;
  }
  document.body.appendChild(divResults);
}

function playGame(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

const choices = ["ROCK", "PAPER", "SCISSORS"];
const buttonsContainer = document.querySelector("#buttons");

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.textContent = choice;
  button.addEventListener("click", function () {
    playGame(choice);
  });
  buttonsContainer.appendChild(button);
});
