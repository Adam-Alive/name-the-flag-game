// Code starts here
// Let the DOM finish loading before running the game

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  console.log(buttons);
});

// Randomly selects a flag-country pair - does so as a function, but not when variable
function displayCurrentFlag() {
  console.log(flagData[Math.floor(Math.random() * flagData.length)]);
}
displayCurrentFlag();

function displaySecondCountry() {}

function displayThirdCountry() {}

function shuffleQuestions() {}

function correctAnswer() {}

function incorrectAnswer() {}

function nextQuestion() {}

function totalScoreMessage() {}

function restartGame() {}
