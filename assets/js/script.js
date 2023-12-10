// Flag and Country Dictionary
const flagData = [
    {
        flag: 'afghanistan.webp',
        country: 'Afghanistan'
    },
    {
        flag: 'aland-islands.webp',
        country: 'Aland Islands'
    },

    {
        flag: 'albania.webp',
        country: 'Albania',
    },
    {
        flag: 'american-samoa.webp',
        country: 'American Samoa',
    },
    {
        flag: 'andorra.webp',
        country: 'Andorra',
    },
    {
        flag: 'angola.webp',
        country: 'Angola',
    },
    {
        flag: 'anguilla.webp',
        country: 'Anguilla',
    },
    {
        flag: 'antarctica.webp',
        country: 'Antarctica',
    },
    {
        flag: 'antigua-and-barbuda.webp',
        country: 'Antigua and Barbuda',
    },
    {
        flag: 'argentina.webp',
        country: 'Argentina',
    },



  
]
// Last line of dictionary directly above this line

// Code starts here
// Let the DOM finish loading before running the game
// Get button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
});
console.log(buttons);


function displayCurrentFlag() {
    console.log(flagData[(Math.floor(Math.random() * flagData.length))]);
    
}
displayCurrentFlag();

function displaySecondCountry(){

}

function displayThirdCountry(){

}

function shuffleQuestions() {

}

function correctAnswer() {

}

function incorrectAnswer() {

}

function nextQuestion() {

}

function totalScoreMessage() {

}

function restartGame() {
    
}





