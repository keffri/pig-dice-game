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

let activePlayer = 1;

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
    p2Name.style.textDecoration = "underline";
    p1Name.style.textDecoration = "none";
    activePlayer = 2;
    p1RollScore = 0;
    playerOneRolls.textContent = p1RollScore;
  } else if (activePlayer === 1) {
    p1RollScore += roll;
    playerOneRolls.textContent = p1RollScore;
  } else if (activePlayer === 2 && roll === 1) {
    p1Name.style.textDecoration = "underline";
    p2Name.style.textDecoration = "none";
    activePlayer = 1;
    p2RollScore = 0;
    playerTwoRolls.textContent = p2RollScore;
  } else if (activePlayer === 2) {
    p2RollScore += roll;
    playerTwoRolls.textContent = p2RollScore;
  }
}

function checkWinner() {
  if (p1TotalScore >= 100) {
    alert("Player 1 Wins!");
    newGame();
  } else if (p2TotalScore >= 100) {
    alert("Player 2 Wins!");
    newGame();
  }
}

newGameButton.addEventListener("click", newGame);
holdButton.addEventListener("click", holdScore);
holdButton.addEventListener("click", checkWinner);
rollButton.addEventListener("click", randomDiceRoll);
