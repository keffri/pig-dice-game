let newGameButton = document.querySelector(".new-game");
let rollButton = document.querySelector(".roll");
let holdButton = document.querySelector(".hold");
let diceNumber = document.querySelector(".roll-value");

let p1Name = document.querySelector(".player-one-name");
let p2Name = document.querySelector(".player-two-name");

let p1TotalScore = 0;
let playerOneTotal = document.querySelector(".player-one-total-score");

let p1RollScore = 0;
let playerOneRolls = document.querySelector(".player-one-roll-score");

let p2TotalScore = 0;
let playerTwoTotal = document.querySelector(".player-two-total-score");

let p2RollScore = 0;
let playerTwoRolls = document.querySelector(".player-two-roll-score");

function setFirstPlayer() {
  let random = Math.floor(Math.random() * 2) + 1;
  activePlayer = random;
  if (activePlayer === 1) {
    p1Name.classList.add("active");
  } else if (activePlayer === 2) {
    p2Name.classList.add("active");
  }
}

function newGame() {
  p1RollScore = 0;
  playerOneRolls.textContent = p1RollScore;
  p1TotalScore = 0;
  playerOneTotal.textContent = p1TotalScore;
  p2RollScore = 0;
  playerTwoRolls.textContent = p2RollScore;
  p2TotalScore = 0;
  playerTwoTotal.textContent = p2TotalScore;
  diceNumber.textContent = "0";
  setFirstPlayer();
}

function holdScore() {
  if (activePlayer === 1) {
    activePlayer = 2;
    p1TotalScore += p1RollScore;
    playerOneTotal.textContent = p1TotalScore;
    p1RollScore = 0;
    playerOneRolls.textContent = p1RollScore;
  } else if (activePlayer === 2) {
    activePlayer = 1;
    p2TotalScore += p2RollScore;
    playerTwoTotal.textContent = p2TotalScore;
    p2RollScore = 0;
    playerTwoRolls.textContent = p2RollScore;
  }
}

function randomDiceRoll() {
  let roll = Math.floor(Math.random() * 6) + 1;
  diceNumber.textContent = roll;
  if (activePlayer === 1 && roll === 1) {
    activePlayer = 2;
    p1RollScore = 0;
    playerOneRolls.textContent = p1RollScore;
  } else if (activePlayer === 1) {
    p1RollScore += roll;
    playerOneRolls.textContent = p1RollScore;
  } else if (activePlayer === 2 && roll === 1) {
    activePlayer = 1;
    p2RollScore = 0;
    playerTwoRolls.textContent = p2RollScore;
  } else if (activePlayer === 2) {
    p2RollScore += roll;
    playerTwoRolls.textContent = p2RollScore;
  }
}

function playerActive() {
  if (activePlayer === 1) {
    p1Name.classList.add("active");
    p2Name.classList.remove("active");
  } else if (activePlayer === 2) {
    p2Name.classList.add("active");
    p1Name.classList.remove("active");
  }
}

function checkWinner() {
  if (p1TotalScore >= 100) {
    alert("Player 1 Wins!");
    newGame();
    setFirstPlayer();
  } else if (p2TotalScore >= 100) {
    alert("Player 2 Wins!");
    newGame();
    setFirstPlayer();
  }
}

newGameButton.addEventListener("click", newGame);
holdButton.addEventListener("click", holdScore);
holdButton.addEventListener("click", checkWinner);
holdButton.addEventListener("click", playerActive);
rollButton.addEventListener("click", randomDiceRoll);
rollButton.addEventListener("click", playerActive);

setFirstPlayer();
