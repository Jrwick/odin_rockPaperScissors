console.log(getComputerChoice());
console.log(getHumanChoice());

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Make a choice");
  return choice;
}
