"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Éléments du DOM:");
  console.log("player1Score:", document.getElementById("player1Score"));
  console.log("player2Score:", document.getElementById("player2Score"));
  console.log("playingTo:", document.getElementById("playingTo"));
  console.log("scoreLimit:", document.getElementById("scoreLimit"));
  console.log("playerOneBtn:", document.getElementById("playerOneBtn"));
  console.log("playerTwoBtn:", document.getElementById("playerTwoBtn"));
  console.log("resetBtn:", document.getElementById("resetBtn"));

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
  }

  function playerTwoScore() {
    player2Score++;
    player2ScoreElement.textContent = player2Score;
  }

  function resetParty() {
    player1ScoreElement.textContent = 0;
    player2ScoreElement.textContent = 0;
  }

  function whosWinning() {
    if (
      player2Score <= scoreLimitInput.textContent ||
      player1Score <= scoreLimitInput.textContent
    ) {
    }
  }

  playerOneBtnIncrease.addEventListener("click", playerOneScore);
  playerTwoBtnIncrease.addEventListener("click", playerTwoScore);
  resetBtn.addEventListener("click", resetParty);
});
