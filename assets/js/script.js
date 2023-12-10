// Flag and Country Dictionary
const flagData = [
    {
        flag: "afghanistan.webp",
        country: "Afghanistan",
    },
    {
        flag: "aland-islands.webp",
        country: "Aland Islands",
    },

    {
        flag: "albania.webp",
        country: "Albania",
    },
    {
        flag: "american-samoa.webp",
        country: "American Samoa",
    },
    {
        flag: "andorra.webp",
        country: "Andorra",
    },
    {
        flag: "angola.webp",
        country: "Angola",
    },
    {
        flag: "anguilla.webp",
        country: "Anguilla",
    },
    {
        flag: "antarctica.webp",
        country: "Antarctica",
    },
    {
        flag: "antigua-and-barbuda.webp",
        country: "Antigua and Barbuda",
    },
    {
        flag: "argentina.webp",
        country: "Argentina",
    },
];
// Last line of dictionary directly above this line

// Code starts here
// Let the DOM finish loading before running the game
// On page load, the first flag and three countries will be displayed
// User clicks on a country name to answer
// Not sure about listening for button clicks??

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    console.log(buttons);
});

// Randomly selects a flag-country pair - does so as a function, but not when variable
function displayCurrentFlag() {
    let currentFlag = (flagData[Math.floor(Math.random() * flagData.length)]);
    console.log(currentFlag.country);
}




function displaySecondCountry() { }

function displayThirdCountry() { }

function shuffleQuestions() { }

function correctAnswer() { }

function incorrectAnswer() { }

function nextQuestion() { }

function totalScoreMessage() { }

function restartGame() { }
