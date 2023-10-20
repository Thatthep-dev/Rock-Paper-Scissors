function playRPS() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let userChoice = prompt("Choose: rock, paper, or scissors");

  if (userChoice === null) {
    console.log("You canceled the game.");
    return "cancel";
  }

  userChoice = userChoice.trim().toLowerCase();

  if (userChoice === "") {
    console.log(
      "You didn't enter a choice. Please choose rock, paper, or scissors."
    );
    return "invalid";
  }

  if (choices.indexOf(userChoice) === -1) {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    return "invalid";
  }

  console.log("Your choice: " + userChoice);
  console.log("Computer's choice: " + computerChoice);

  if (userChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You win!");
    return "win";
  } else {
    console.log("You lose!");
    return "lose";
  }
}

let playerScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {
  const result = playRPS();

  if (result === "win") {
    playerScore += 1;
  } else if (result === "lose") {
    computerScore += 1;
  }
}

console.log("Player Score:", playerScore);
console.log("Computer Score:", computerScore);
