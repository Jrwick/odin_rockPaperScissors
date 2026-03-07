let gameEnded = false;
let humanScore = 0;
let computerScore = 0;
const resultDiv = document.querySelector("#results");
const humanResult = document.querySelector("#human");
const comResult = document.querySelector("#com");

const btns = document.querySelectorAll(".selections");

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  updateScore();
  resultText.remove();
  gameEnded = false;
});

function updateScore() {
  humanResult.textContent = humanScore;
  comResult.textContent = computerScore;
  if (humanScore == 5) {
    resultText.textContent = "You win!";
    resultDiv.appendChild(resultText);
    gameEnded = true;
  } else if (computerScore == 5) {
    resultText.textContent = "You lose!";
    resultDiv.appendChild(resultText);
    gameEnded = true;
  }
}

const resultText = document.createElement("span");

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (!gameEnded) {
    let lowerCaseHumanChoice = humanChoice.toLowerCase();

    if (lowerCaseHumanChoice == "rock") {
      if (computerChoice == "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;
      } else if (computerChoice == "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore++;
      } else {
        console.log("It's a draw!");
      }
    } else if (lowerCaseHumanChoice == "paper") {
      if (computerChoice == "rock") {
        console.log("You win! Paper beats rock");
        humanScore++;
      } else if (computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore++;
      } else {
        console.log("It's a draw!");
      }
    } else if (lowerCaseHumanChoice == "scissors") {
      if (computerChoice == "rock") {
        console.log("You lose! Rock beats scissors");
        computerScore++;
      } else if (computerChoice == "paper") {
        console.log("You win! Scissors beats paper");
        humanScore++;
      } else {
        console.log("It's a draw!");
      }
    } else {
      console.log("Human did not enter a valid choice");
    }
    updateScore();
  }
}

function showScores() {
  console.log(`Player ${humanScore}:${computerScore} Computer`);
}

function roundResult() {
  if (humanScore > computerScore) {
    alert("You win!");
  } else if (computerScore > humanScore) {
    alert("You lose!");
  } else {
    alert("It's a draw!");
  }
}
