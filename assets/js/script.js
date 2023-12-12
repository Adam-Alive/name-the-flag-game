
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const optionsContainerElement = document.getElementById('flag-options-container');


startButton.addEventListener('click', startGame);


// Functions
function startGame() {
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    optionsContainerElement.classList.remove('hide');

}



displayCurrentFlag();

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