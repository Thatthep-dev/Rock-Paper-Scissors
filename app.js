function playRPS(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

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
//Button input
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => {
  let userChoice = "rock";
  playRPS(userChoice);
});

paperBtn.addEventListener("click", () => {
  let userChoice = "paper";
  playRPS(userChoice);
});

scissorsBtn.addEventListener("click", () => {
  let userChoice = "scissors";
  playRPS(userChoice);
});
