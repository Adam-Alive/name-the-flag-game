/* jshint esversion: 11 */

// * VARIABLES * //
//
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
const questionMax = document.querySelectorAll('.question-max');
const scoreTally = document.getElementById('score-tally');
const scoreMessageDiv = document.getElementById('score-message');
const totalScore = document.getElementById('total-score');

// Variables for game set-up and play
let shuffledFlagData;
let currentFlagIndex = 0;
let maxQuestions = 20;
questionMax.forEach(span => {
    span.innerText = maxQuestions;
});

// * EVENT LISTENERS * //
//
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', resetGame);
playAgainButton.addEventListener('click', resetGame);

flagButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        userSelectedButton(e);
    });
});

nextButton.addEventListener('click', () => {
    currentFlagIndex++;
    restartButton.classList.add('hide');
    nextButton.classList.add('hide');
    enableButtons();
    setNextQuestion();
});

// * FUNCTIONS * //
//
// Select button functions
function userSelectedButton(e) {    
    if (e.target.dataset.correct === 'true') {
        incrementScore();
    }
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

// Start game
function startGame() {
    startButton.classList.add('hide');
    welcomeTextDiv.classList.add('hide');
    tallyAreaDiv.classList.remove('hide');    
    answersContainerDiv.classList.remove('hide');    
    scoreMessageDiv.classList.add('hide');       
    flagImage.style.border = '1px solid rgb(10, 13, 17)';
    flagImage.alt ='Flag image selected randomly for each question'
    shuffledFlagData = flagData.sort(() => Math.random() - 0.5);
    showFlagQuestion();   
    showFlagAnswers();
    resetAnswerButtons();    
}

// *** Reset the dataset and shuffle again?? *** 
function resetGame() {
    restartButton.classList.add('hide');
    nextButton.classList.add('hide');
    questionTally.innerText = `1`;
    scoreTally.innerText = `0`;
    currentFlagIndex = 0;
    enableButtons();
    startGame();
}

// Display flag image for question
function showFlagQuestion() {    
    flagImage.src = `assets/images/${flagData[currentFlagIndex].flag.toLowerCase().replace(' ', '-')}.webp`;    
}

//Display answer options on 3 buttons and assign answer value to each
function showFlagAnswers() {
    flagData[currentFlagIndex].options.sort(() => Math.random() - 0.5);
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
    flagButtons.forEach(btn => {        
        let answer = btn.dataset.correct;        
        if (answer === 'true') {
            btn.classList.add('flag-btn-true');
            } else {
            btn.classList.add('flag-btn-false');
        }
    });
       if (currentFlagIndex >= maxQuestions - 1) {        
        endGame();
    } else {
    nextButton.classList.remove('hide');
    restartButton.classList.remove('hide');
    }
}

// Increment score by 1 if answer correct
function incrementScore() {    
    let previousScore = parseInt(scoreTally.innerText);
    scoreTally.innerText = ++previousScore;
}

// Go to next question and increment question tally number (n/20)
function setNextQuestion() {    
    showFlagQuestion();
    showFlagAnswers();
    resetAnswerButtons();
    incrementQuestionTally();    
}

function incrementQuestionTally() {
    let previousQuestionTally = parseInt(questionTally.innerText);
    questionTally.innerText = ++previousQuestionTally;  
}

// Clears green and red background colour from answer buttons for next question
function resetAnswerButtons() {
    flagButtons.forEach(btn => {
        btn.classList.remove('flag-btn-true');
        btn.classList.remove('flag-btn-false');
    });
}

// Display total score and message
// Display Play Again button
function endGame() {
    nextButton.classList.add('hide');
    restartButton.classList.add('hide');
    scoreMessageDiv.classList.remove('hide');    
    totalScore.innerText = document.getElementById('score-tally').innerText;    
}
// *** END OF CODE ***