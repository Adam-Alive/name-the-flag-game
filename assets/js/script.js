
const startButton = document.getElementById('start-btn');
const welcomeTextDiv = document.getElementById('welcome-text');
const tallyAreaDiv = document.getElementById('tally-area');
const nextButton = document.getElementById('next-btn');
const optionsContainerDiv = document.getElementById('flag-options-container');
const restartButton = document.getElementById('restart-btn');



startButton.addEventListener('click', startGame);
// Need to replace test in function below when ready!!!
nextButton.addEventListener('click', test);
// Need to replace test2 in function below when ready!!!
restartButton.addEventListener('click', test2);

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

function test2() {
    console.log('restart button has been clicked');
}

console.log(questionsList);

console.log(questionsList[1]);

// Possible functions ***
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