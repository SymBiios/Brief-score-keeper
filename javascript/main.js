"use strict";

const player1ScoreElement = document.getElementById("player1Score");
const player2ScoreElement = document.getElementById("player2Score");
const pointsForVictory = document.getElementById("playingto");
const scoreLimitInput = document.getElementById("scoreLimit");

let player1Score = parseInt(player1ScoreElement.textContent);
let player2Score = parseInt(player2ScoreElement.textContent);
let VictoryPoints = parseInt(pointsForVictory.textContent);

function playerOneScore() {
  player1Score++;
  player1ScoreElement.textContent = player1Score;
}

function playerTwoScore() {}

function resetParty() {}

playerOneBtn.addEventListener("click", playerOneScore);
playerTwoBtn.addEventListener("click", playerTwoScore);
resetBtn.addEventListener("click", resetParty);
