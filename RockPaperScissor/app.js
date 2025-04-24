const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const winner = document.getElementById("winner");
const computerShow = document.getElementById("computerShow");
let playerTempScore = 0;
let computerTempScore = 0;
console.log("working");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

const computerChoiceMaker = () => {
  let randNumber = Math.floor(Math.random() * 3);
  let choice = randNumber === 1 ? ROCK : randNumber === 2 ? PAPER : SCISSOR;
  return choice;
};
const winnerResult = (gameWinner, computerChoice) => {
  computerShow.textContent = `Compueter : ${computerChoice}`;
  if (gameWinner === "P") {
    winner.textContent = "Player Win";
    playerTempScore++;
    playerScore.textContent = `${playerTempScore}`;
    return;
  }
  if (gameWinner === "G") {
    winner.textContent = "Computer Win";
    computerTempScore++;
    computerScore.textContent = `${computerTempScore}`;
  }
};

const calculateWinner = (playerChoice) => {
  console.log(playerChoice);
  let computerChoice = computerChoiceMaker();
  console.log(computerChoice);
  if (playerChoice === computerChoice) {
    winner.textContent = "DRAW";
    computerShow.textContent = `Compueter : ${computerChoice}`;
  } else if (playerChoice === ROCK && computerChoice === SCISSOR) {
    winnerResult("P", computerChoice);
  } else if (playerChoice === ROCK && computerChoice === PAPER) {
    winnerResult("G", computerChoice);
  } else if (playerChoice === PAPER && computerChoice === ROCK) {
    winnerResult("P", computerChoice);
  } else if (playerChoice === PAPER && computerChoice === SCISSOR) {
    winnerResult("G", computerChoice);
  } else if (playerChoice === SCISSOR && computerChoice === ROCK) {
    winnerResult("G", computerChoice);
  } else if (playerChoice === SCISSOR && computerChoice === PAPER) {
    winnerResult("P",computerChoice);
  }
};

rockButton.addEventListener("click", calculateWinner.bind(null, ROCK));
paperButton.addEventListener("click", calculateWinner.bind(null, PAPER));
scissorButton.addEventListener("click", calculateWinner.bind(null, SCISSOR));
