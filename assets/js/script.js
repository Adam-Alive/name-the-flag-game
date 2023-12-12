
const startButton = document.getElementById('start-btn');
const welcomeTextDiv = document.getElementById('welcome-text');
const tallyAreaDiv = document.getElementById('tally-area');
const nextButton = document.getElementById('next-btn');
const optionsContainerDiv = document.getElementById('flag-options-container');
const restartButton = document.getElementById('restart-btn');
// Need to test restart function


startButton.addEventListener('click', startGame);
// Need to replace test in function below when ready!!!
nextButton.addEventListener('click', test);
restartButton.addEventListener('click', startGame);

// Functions
function startGame() {
    startButton.classList.add('hide');
    welcomeTextDiv.classList.add('hide');
    tallyAreaDiv.classList.remove('hide');
    nextButton.classList.remove('hide');
    optionsContainerDiv.classList.remove('hide');
    restartButton.classList.remove('hide');



}

// *** Temporary functions for testing ***
function test() {
    console.log('next button has been clicked');
}

console.log(questionsList);

function nextQuestion() { }

function totalScoreMessage() { }



function shuffleQuestions() { }

function correctAnswer() { }

function incorrectAnswer() { }



// Code below is for reference

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");
//     console.log(buttons);
// });

// Randomly selects a flag-country pair - does so as a function, but not when variable
// function displayCurrentFlag() {
//     console.log(flagData[Math.floor(Math.random() * flagData.length)]);
// }