/* jshint esversion: 11 */

// * VARIABLES * //
//
// DOM Elements
const startButton = document.getElementById('start-btn');
const flagButtons = document.querySelectorAll('.flag-btn');
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

// Game State Variables
let shuffledFlagData = [];
let currentFlagIndex = 0;
const maxQuestions = 20;
// Initialize maximum questions in DOM
questionMax.forEach(span => {
    span.innerText = maxQuestions;
});

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
    restartButton.classList.add('hide');
    nextButton.classList.add('hide');
    enableButtons();
    setNextQuestion();
});

// * FUNCTIONS * //
//
// Function to format image filenames consistently
function getFlagImgSrc(flagName) {
  const flagNameFormatted = flagName.toLowerCase().replaceAll(' ', '-');
  return `assets/images/${flagNameFormatted}.webp`;
}

// Preload the specific subset of images selected for this round
function preloadImages(flagArray) {
  flagArray.forEach(item => {
    const img = new Image();
    img.src = getFlagImgSrc(item.flag);
  });
}

// Random shuffle (Fisher-Yates Algorithm)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Select button functions
function userSelectedButton(e) {
    if (e.target.dataset.correct === 'true') {
        incrementScore();
    }
    selectAnswer();
    disableButtons();
}

function disableButtons() {
    flagButtons.forEach(btn => btn.classList.add('disable'));
}

function enableButtons() {
    flagButtons.forEach(btn => btn.classList.remove('disable'));
}

// Start game
function startGame() {
    startButton.classList.add('hide');
    welcomeTextDiv.classList.add('hide');
    tallyAreaDiv.classList.remove('hide');
    answersContainerDiv.classList.remove('hide');
    scoreMessageDiv.classList.add('hide');
    flagImage.style.border = '1px solid rgb(10, 13, 17)';
    flagImage.alt = 'Flag image selected randomly for each question';
    
    // Shuffle all data, slice it to the round length, then preload assets
    shuffledFlagData = shuffleArray(flagData).slice(0, maxQuestions);
    
    preloadImages(shuffledFlagData);
    showFlagQuestion();
    showFlagAnswers();
    resetAnswerButtons();
}

// Reset to question 1/20 and Score = 0
function resetGame() {
    restartButton.classList.add('hide');
    nextButton.classList.add('hide');
    questionTally.innerText = '1';
    scoreTally.innerText = '0';
    currentFlagIndex = 0;
    flagImage.removeAttribute('src');
    enableButtons();
    startGame();
}

// Display flag image for question
function showFlagQuestion() {
    const currentFlag = shuffledFlagData[currentFlagIndex];
    flagImage.removeAttribute('src');
    flagImage.src = getFlagImgSrc(currentFlag.flag);
}

// Display answer options dynamically across available buttons
function showFlagAnswers() {
    const currentFlag = shuffledFlagData[currentFlagIndex];
    const shuffledOptions = shuffleArray(currentFlag.options);
    // Dynamic allocation using loop index
    flagButtons.forEach((btn, index) => {
        if (shuffledOptions[index]) {
            btn.innerText = shuffledOptions[index].text;
            btn.dataset.correct = shuffledOptions[index].correct;
        }
    });
}

// Assign background colour (bgc) to buttons according to correct/incorrect value
// Click correct button === green bgc
// Click incorrect button === red bgc colour and show correct button === green bgc
function selectAnswer() {
    flagButtons.forEach(btn => {
        const isCorrect = btn.dataset.correct === 'true';
        btn.classList.add(isCorrect ? 'flag-btn-true' : 'flag-btn-false');
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
    let previousScore = parseInt(scoreTally.innerText, 10) || 0;
    scoreTally.innerText = previousScore + 1;
}

// Go to next question and increment question tally number (n/20)
function setNextQuestion() {
    showFlagQuestion();
    showFlagAnswers();
    resetAnswerButtons();
    incrementQuestionTally();
}

function incrementQuestionTally() {
    let previousQuestionTally = parseInt(questionTally.innerText, 10) || 0;
    questionTally.innerText = previousQuestionTally + 1;
}

// Clears green and red background colour from answer buttons for next question
function resetAnswerButtons() {
    flagButtons.forEach(btn => {
        btn.classList.remove('flag-btn-true', 'flag-btn-false');
    });
}

// Display total score and message
// Display Play Again button
function endGame() {
    nextButton.classList.add('hide');
    restartButton.classList.add('hide');
    scoreMessageDiv.classList.remove('hide');
    totalScore.innerText = scoreTally.innerText;
}
// ** END OF CODE **
