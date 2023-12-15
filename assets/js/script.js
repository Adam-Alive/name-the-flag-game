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
const flagButtons = document.querySelectorAll('.flag-btn');
const flagImage = document.getElementById('flag-image');
const answersContainerDiv = document.getElementById('answers-container');

// Variables for game set-up and play
let shuffledFlagData;
let currentFlagIndex = 0;

// * EVENT LISTENERS * //

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

flagButtons.forEach(btn => {
    btn.addEventListener('click', userSelectedButton);
});

nextButton.addEventListener('click', () => {
    currentFlagIndex++;
    enableButtons();
    setNextQuestion();
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
    flagImage.src = `assets/images/${flagData[currentFlagIndex].flag.toLowerCase().replace(' ', '-')}.webp`;
}

//Display answer options on 3 buttons and assign answer value to each
function showFlagAnswers() {
    flagOneButton.innerText = flagData[currentFlagIndex].options[0].text;
    flagTwoButton.innerText = flagData[currentFlagIndex].options[1].text;
    flagThreeButton.innerText = flagData[currentFlagIndex].options[2].text;
    flagOneButton.dataset.correct = flagData[currentFlagIndex].options[0].correct;
    flagTwoButton.dataset.correct = flagData[currentFlagIndex].options[1].correct;
    flagThreeButton.dataset.correct = flagData[currentFlagIndex].options[2].correct;
}

// Assign background colours to buttons according to correct/incorrect value
// Increment score by 1 if correct
function selectAnswer() {


}

// Go to next question and increment question number
function setNextQuestion() {
    console.log('this is setNextQuestion!!!');
    showFlagQuestion();
    showFlagAnswers();

}


// Display total score and message
function totalScoreMessage() {

}



// *** Temporary functions for testing ***
function test() {
    console.log('next button has been clicked');
}

function userSelectedButton() {
    console.log('flag button has been clicked!!!)');
    disableButtons();
}

function disableButtons() {
    flagButtons.forEach(btn => {
        btn.classList.add('disable');
    });
}

function enableButtons() {
    flagButtons.forEach(btn => {
        btn.classList.remove('disable');
    });
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