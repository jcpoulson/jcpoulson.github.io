
// Variables
const startButton = document.querySelector('.btn__reset');
const startScreen = document.querySelector('.start');
const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const phraseUl = phrase.firstElementChild;
const lives = document.querySelector('ol').children;
const winResetButton = document.querySelector('.reset_game_win');
const loseResetButton = document.querySelector('.reset_game_lose');

let missed = 0;

const phrases = ['Vanilla JavaScript', 'Playstation Four', 'Camera lens', 'Chocolate Milk', 'Team Treehouse'];

// Functions

function getRandomPhraseArray() {
    function getRandomPhrase() {
        let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        return randomPhrase;
    }
    let r = getRandomPhrase();
    let rArray = [];
        for (let i = 0; i < r.length; i++) {
            rArray.push(r[i]);
        }
    return rArray;
};

function addPhraseToDisplay() {
    const phraseArray = getRandomPhraseArray();
    for (let i = 0; i < phraseArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = phraseArray[i];
        phraseUl.appendChild(li);
        li.className = 'letter';
        if (li.textContent === ' ') {
            li.id = 'blank';
        }
        
    }
};

function checkLetter(button) {
    let letters = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < letters.length; i++){
        let letter = letters[i];
        if (letter.textContent.toLowerCase() === button.textContent.toLowerCase()) {
            letter.className = 'letter show';
            match = button;
        }
    }
    return match;
}

function checkWin() {
    let answers = document.querySelectorAll('.letter');
    let correctGuesses = document.querySelectorAll('.show');
    if (correctGuesses.length === answers.length - 1) {
        let winOverLay = document.querySelector('.win');
        winOverLay.style.visibility = 'visible';
    } else if (missed === 5) {
        let loseOverLay = document.querySelector('.lose');
        loseOverLay.style.visibility = 'visible';
    }
}

// Event Listeners

keyboard.addEventListener('click', (e) => {
    let key = e.target;
    if (key.tagName === 'BUTTON') {
        let letterFound = checkLetter(key);
        key.className = 'chosen';
        key.setAttribute('disabled', 'true');
            if (letterFound === null) {
                missed += 1;
                for (let i = 0; i < missed; i++) {
                    lives[i].style.display = 'none';
                }
            }
    }
    checkWin();
});

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    addPhraseToDisplay();
});

winResetButton.addEventListener('click', () => {
    location.reload();
});

loseResetButton.addEventListener('click', () => {
    location.reload();
});





