// * VARIABLES * //

// Constant variables related to the DOM
const startButton = document.getElementById('start-btn');
const flagButtons = document.querySelectorAll('.flag-btn');
const flagOneButton = document.getElementById('flag-one');
const flagTwoButton = document.getElementById('flag-two');
const flagThreeButton = document.getElementById('flag-three');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const playAgainButton = document.getElementById('play-again-btn');
const welcomeTextDiv = document.getElementById('welcome-text');
const flagImage = document.getElementById('flag-image');
const tallyAreaDiv = document.getElementById('tally-area');
const answersContainerDiv = document.getElementById('answers-container');
const questionTally = document.getElementById('question-tally');
const scoreTally = document.getElementById('score-tally');
const scoreMessageDiv = document.getElementById('score-message');
const totalScore = document.getElementById('total-score');

// Variables for game set-up and play
let shuffledFlagData;
let currentFlagIndex = 0;

// * EVENT LISTENERS * //
//
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', resetGame);
playAgainButton.addEventListener('click', resetGame);

flagButtons.forEach(btn => {
    btn.addEventListener('click', userSelectedButton);
});

nextButton.addEventListener('click', () => {
    currentFlagIndex++;
    enableButtons();
    setNextQuestion();
});

// * FUNCTIONS * //

// Select button functions
function userSelectedButton() {
    console.log('flag button has been clicked!!!)');
    selectAnswer();
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

// Start and restart game
function startGame() {
    startButton.classList.add('hide');
    welcomeTextDiv.classList.add('hide');
    tallyAreaDiv.classList.remove('hide');    
    answersContainerDiv.classList.remove('hide');    
    scoreMessageDiv.classList.add('hide');
    let flagImage = document.getElementById('flag-image');
    flagImage.style.border = '1px solid rgb(10, 13, 17)';
    // Test code
    console.log('game has started!');
    // Continue
    shuffledFlagData = flagData.sort(() => Math.random() - 0.5);
    showFlagQuestion();
    // Test code
    console.log(shuffledFlagData);
    // Continue
    showFlagAnswers();
    resetAnswerButtons();
    
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

// Assign background colour (bgc) to buttons according to correct/incorrect value
// Click correct button === green bgc
// Click incorrect button === red bgc colour and show correct button === green bgc

function selectAnswer() {

    // console.log('select answer function is linked to userSelectedButton()');
    flagButtons.forEach(btn => {
        nextButton.classList.remove('hide');
        restartButton.classList.remove('hide');
        let answer = btn.dataset.correct;
        console.log(answer);
        if (answer === 'true') {
            btn.classList.add('flag-btn-true');
            incrementScore();
        } 
        if (answer === 'false') {
            btn.classList.add('flag-btn-false');
        }
    });
    console.log(currentFlagIndex);
    if (currentFlagIndex >= 5) {
        console.log('end game');
        endGame();
    };
}
// Increment score by 1 if answer correct
function incrementScore() {
    console.log('correct answer - score +1');
    let previousScore = parseInt(scoreTally.innerText);
    scoreTally.innerText = ++previousScore;

}

// Go to next question and increment question number
function setNextQuestion() {
    console.log('this is setNextQuestion!!!');
    showFlagQuestion();
    showFlagAnswers();
    resetAnswerButtons();
    incrementQuestionTally();
    // console.log(currentFlagIndex);

}

function incrementQuestionTally() {
    let previousQuestionTally = parseInt(questionTally.innerText);
    questionTally.innerText = ++previousQuestionTally;  
}

// Clears green and red background colour from answer buttons for next question
// *** Need this to be called by restartButton
function resetAnswerButtons() {
    flagButtons.forEach(btn => {
        btn.classList.remove('flag-btn-true');
        btn.classList.remove('flag-btn-false');
    });
}

// Need function to reset questionTally to 1/20 and scoreTally to 0


// Display total score and message
// Display Play Again button
function endGame() {
    nextButton.classList.add('hide');
    restartButton.classList.add('hide');
    scoreMessageDiv.classList.remove('hide');
    console.log('ENDGAME IS CALLED!!!');
    totalScore.innerText = document.getElementById('score-tally').innerText;    
}
// *** Need to work out how to reset the dataset and shuffle again?? *** 
function resetGame () {
    restartButton.classList.add('hide');
    nextButton.classList.add('hide');   
    questionTally.innerText = `1`;
    scoreTally.innerText = `0`;
    currentFlagIndex = 0;
    startGame();
}

// *** Temporary functions for testing ***
function test() {
    console.log('next button has been clicked');
}
// *** END (REMOVE)