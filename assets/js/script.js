
const startButton = document.getElementById('start-btn');
const welcomeTextDiv = document.getElementById('welcome-text');
const tallyAreaDiv = document.getElementById('tally-area');
const nextButton = document.getElementById('next-btn');
const optionsContainerDiv = document.getElementById('flag-options-container');
const restartButton = document.getElementById('restart-btn');
const flagOneButton = document.getElementById('flag-one');
const flagTwoButton = document.getElementById('flag-two');
const flagThreeButton = document.getElementById('flag-three');



let shuffledFlagData, currentFlagIndex;

let img = document.getElementById('flag-image');

startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
    currentFlagIndex++;
    // setNextQuestion();
});

restartButton.addEventListener('click', startGame);
flagOneButton.addEventListener('click', testFlagButtons);
flagTwoButton.addEventListener('click', testFlagButtons);
flagThreeButton.addEventListener('click', testFlagButtons);


// Functions
function startGame() {
    startButton.classList.add('hide');
    welcomeTextDiv.classList.add('hide');
    tallyAreaDiv.classList.remove('hide');
    nextButton.classList.remove('hide');
    optionsContainerDiv.classList.remove('hide');
    restartButton.classList.remove('hide');
    // Test code
    console.log('game has started!');
    // Continue
    shuffledFlagData = flagData.sort(() => Math.random() - 0.5);
    currentFlagIndex = 0;
    showFlagQuestion();
    console.log(shuffledFlagData);

}

// Function to display flag image and 3 answer options
function showFlagQuestion() {
    // Test code
    console.log('this is showFlagQuestion!');
    // Continue

}


// function setNextQuestion() {
//     console.log('this is setNextQuestion!!!');
// }



// *** Temporary functions for testing ***
function test() {
    console.log('next button has been clicked');
}

function testFlagButtons() {
    console.log('flag button has been clicked!!!)');
}






// *** Temporaary code for testing ***
console.log(flagData);

console.log(flagData[1]);

console.log(flagData[2].flag);

for (let flag of flagData) {
    console.log(flag);
}

console.log(flagData[2].options[1]);

console.log(flagData[2].options[1].text);

console.log(flagData[3].options[2].correct);




// Possible functions ***

function selectAnswer() { }

function setNextQuestion() { }

function totalScoreMessage() { }




// Code below is for reference

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");
//     console.log(buttons);
// });

// Randomly selects a flag-country pair - does so as a function, but not when variable
// function displayCurrentFlag() {
//     console.log(flagData[Math.floor(Math.random() * flagData.length)]);
// }