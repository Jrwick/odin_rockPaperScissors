let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let choice = prompt("Make a choice");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  let lowerCaseHumanChoice = humanChoice.toLowerCase();
  console.log(`Human: ${lowerCaseHumanChoice}`);
  console.log(`Computer: ${computerChoice}`);

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
      console.log("You win! Rock beats paper");
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
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
