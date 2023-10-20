function playRPS(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const userChoiceElement = document.querySelector("#userChoice");
  const computerChoiceElement = document.querySelector("#computerChoice");
  const resultElement = document.querySelector("#result");

  userChoiceElement.textContent = userChoice;
  computerChoiceElement.textContent = computerChoice;

  if (userChoice === computerChoice) {
    resultElement.textContent = "It's a tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    resultElement.textContent = "You win!";
  } else {
    resultElement.textContent = "You lose!";
  }
}

// Button input
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => {
  playRPS("rock");
});

paperBtn.addEventListener("click", () => {
  playRPS("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRPS("scissors");
});
