
const startButton = document.getElementById('start-btn');
const welcomeTextDiv = document.getElementById('welcome-text');
const tallyAreaDiv = document.getElementById('tally-area');
const nextButton = document.getElementById('next-btn');
const optionsContainerDiv = document.getElementById('flag-options-container');
const restartButton = document.getElementById('restart-btn');


//let img = document.getElementById('flag-image');

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

// Function to display flag image
function displayFlagImage() {

}

// *** Temporary functions for testing ***
function test() {
    console.log('next button has been clicked');
}

function test2() {
    console.log('restart button has been clicked');
}

// *** Temporaary code for testing ***
console.log(flagData);

console.log(flagData[1]);

console.log(flagData[2].flag);

for (let flag of flagData) {
    console.log(flag)
}

console.log(flagData[2].options[1]);

console.log(flagData[2].options[1].text);

console.log(flagData[3].options[2].correct);




// Possible functions ***
function nextQuestion() { }

function totalScoreMessage() { }

function shuffleQuestions() { }

function incrementScoreTally () { }

function displayAnswer () { }


// Code below is for reference

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");
//     console.log(buttons);
// });

// Randomly selects a flag-country pair - does so as a function, but not when variable
// function displayCurrentFlag() {
//     console.log(flagData[Math.floor(Math.random() * flagData.length)]);
// }