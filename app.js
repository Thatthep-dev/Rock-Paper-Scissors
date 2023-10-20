function playRPS(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const userChoiceElement = document.querySelector("#userChoice");
  const computerChoiceElement = document.querySelector("#computerChoice");
  const resultElement = document.querySelector("#result");
  const userScoreElement = document.querySelector("#userScore");
  const computerScoreElement = document.querySelector("#computerScore");
  const finalResult = document.querySelector("#finalResult");
  const finalResultElement = document.createElement("div");

  userChoiceElement.textContent = userChoice;
  computerChoiceElement.textContent = computerChoice;
  if (userScore < maxScore && comScore < maxScore) {
    if (userChoice === computerChoice) {
      resultElement.textContent = "It's a tie";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      resultElement.textContent = "You win!";
      userScore += 1;
      userScoreElement.textContent = userScore;
    } else {
      resultElement.textContent = "You lose!";
      comScore += 1;
      computerScoreElement.textContent = comScore;
    }
  }

  if (userScore === maxScore || comScore === maxScore) {
    if (userScore > comScore) {
      finalResultElement.textContent = "Congratulation! YOU WIN!!!";
    } else if (userScore < comScore) {
      finalResultElement.textContent = "Sadly! YOU LOSE!!!";
    }
    finalResult.appendChild(finalResultElement);
  }
}
//Loop setting
let maxScore = 5;
let userScore = 0;
let comScore = 0;

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
