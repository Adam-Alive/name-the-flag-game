// * VARIABLES * //

// Constant variables related to the DOM
const startButton = document.getElementById('start-btn');
const welcomeTextDiv = document.getElementById('welcome-text');
const tallyAreaDiv = document.getElementById('tally-area');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const flagOneButton = document.getElementById('flag-one');
const flagTwoButton = document.getElementById('flag-two');
const flagThreeButton = document.getElementById('flag-three');
const flagImage = document.getElementById('flag-image');
const answersContainerDiv = document.getElementById('answers-container');

// Variables for game set-up and play
let shuffledFlagData;
let currentFlagIndex;

let img = document.getElementById('flag-image');

// * EVENT LISTENERS * //

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
// !!!*** I need to replace testFlagButtons in parameters below: ***!!!
flagOneButton.addEventListener('click', testFlagButtons);
flagTwoButton.addEventListener('click', testFlagButtons);
flagThreeButton.addEventListener('click', testFlagButtons);

nextButton.addEventListener('click', () => {
    currentFlagIndex++;
    // setNextQuestion();
});

// * FUNCTIONS * //

// Start and restart game
function startGame() {
    startButton.classList.add('hide');
    welcomeTextDiv.classList.add('hide');
    tallyAreaDiv.classList.remove('hide');
    nextButton.classList.remove('hide');
    answersContainerDiv.classList.remove('hide');
    restartButton.classList.remove('hide');
    // Test code
    console.log('game has started!');
    // Continue
    shuffledFlagData = flagData.sort(() => Math.random() - 0.5);
    currentFlagIndex = 0;
    showFlagQuestion();
    // Test code
    console.log(shuffledFlagData);
    // Continue
    showFlagAnswers();

}

// Display flag image for question
function showFlagQuestion() {
    // Test code
    console.log('this is showFlagQuestion!');
    // Continue
    flagImage.innerText = flagData[0].flag;
        // I still don't understand how this will access the image files - this code crashes
    // img.src = `assets/images/${flagImage.toLowerCase().replace(' ', '-')}.webp`;
    

}

//Display answer options on 3 buttons
function showFlagAnswers () {
    flagOneButton.innerText = flagData[0].options[0].text;
    flagTwoButton.innerText = flagData[0].options[1].text;
    flagThreeButton.innerText = flagData[0].options[2].text;

}

function selectAnswer() { 

}


// function setNextQuestion() {
//     console.log('this is setNextQuestion!!!');
// }

// Go to next question and increment question number
function setNextQuestion() { 

}

// Display total score and message
function totalScoreMessage() { }



// *** Temporary functions for testing ***
function test() {
    console.log('next button has been clicked');
}

function testFlagButtons() {
    console.log('flag button has been clicked!!!)');
}

// *** Temporary code for testing ***
console.log(flagData);

console.log(flagData[1]);

console.log(flagData[2].flag);

for (let flag of flagData) {
    console.log(flag);
}

console.log(flagData[2].options[1]);

console.log(flagData[2].options[1].text);

console.log(flagData[3].options[2].correct);
// END