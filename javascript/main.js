"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const player1ScoreElement = document.getElementById("player1Score");
  const player2ScoreElement = document.getElementById("player2Score");
  const pointsForVictory = document.getElementById("playingTo");
  const scoreLimitInput = document.getElementById("scoreLimit");
  const playerOneBtnIncrease = document.getElementById("playerOneBtn");
  const playerTwoBtnIncrease = document.getElementById("playerTwoBtn");
  const resetBtn = document.getElementById("resetBtn");

  let player1Score = parseInt(player1ScoreElement.textContent);
  let player2Score = parseInt(player2ScoreElement.textContent);
  let victoryPoints = parseInt(pointsForVictory.textContent);

  function playerOneScore() {
    player1Score++;
    player1ScoreElement.textContent = player1Score;
    whosWinning();
  }

  function playerTwoScore() {
    player2Score++;
    player2ScoreElement.textContent = player2Score;
    whosWinning();
  }

  function resetParty() {
    player1ScoreElement.textContent = 0;
    player2ScoreElement.textContent = 0;
    player1Score = 0;
    player2Score = 0;
    playerOneBtnIncrease.disabled = false;
    playerTwoBtnIncrease.disabled = false;
    pointsForVictory.textContent = 5;
  }

  function whosWinning() {
    if (player2Score >= victoryPoints || player1Score >= victoryPoints) {
      playerOneBtnIncrease.disabled = true;
      playerTwoBtnIncrease.disabled = true;
    }
  }

  scoreLimitInput.addEventListener("change", function (event) {
    let newValue = parseInt(this.value);

    if (newValue < 1 || isNaN(newValue)) {
      newValue = 5;
      this.value = 5;
    }

    victoryPoints = parseInt(this.value);
    pointsForVictory.textContent = parseInt(this.value);

    player1ScoreElement.textContent = 0;
    player2ScoreElement.textContent = 0;
    player1Score = 0;
    player2Score = 0;
    playerOneBtnIncrease.disabled = false;
    playerTwoBtnIncrease.disabled = false;
  });

  playerOneBtnIncrease.addEventListener("click", playerOneScore);
  playerTwoBtnIncrease.addEventListener("click", playerTwoScore);
  resetBtn.addEventListener("click", resetParty);
});
