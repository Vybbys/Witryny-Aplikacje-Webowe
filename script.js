const cards = [
    '🍎', '🍎', '🍌', '🍌', '🍇', '🍇',
    '🍓', '🍓', '🍍', '🍍', '🥝', '🥝'
];

let firstCard = null;
let secondCard = null;
let moves = 0;
let matchedPairs = 0;
let isFlipping = false;
let timer = 0;
let timerInterval;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        document.getElementById('timer').textContent = `Time: ${timer}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateMoveCounter() {
    moves++;
    document.getElementById('move-counter').textContent = `Moves: ${moves}`;
}

function createBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    const shuffledCards = shuffle(cards);

    shuffledCards.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;

        const front = document.createElement('div');
        front.classList.add('front');
        front.textContent = '?';

        const back = document.createElement('div');
        back.classList.add('back');
        back.textContent = symbol;

        card.appendChild(front);
        card.appendChild(back);
        board.appendChild(card);

        card.addEventListener('click', handleCardClick);
    });
}


function handleCardClick(event) {
    const clickedCard = event.currentTarget;

    if (isFlipping || clickedCard === firstCard || clickedCard.classList.contains('matched')) {
        return;
    }

    clickedCard.classList.add('flipped');

    if (!firstCard) {
        firstCard = clickedCard;
        return;
    }

    secondCard = clickedCard;
    isFlipping = true;
    updateMoveCounter();

    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedPairs++;
        resetCards();

        if (matchedPairs === cards.length / 2) {
            stopTimer();
            alert(`You won! Moves: ${moves}, Time: ${timer}s`);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetCards();
        }, 1000);
    }
}

function resetCards() {
    [firstCard, secondCard] = [null, null];
    isFlipping = false;
}

function initGame() {
    moves = 0;
    matchedPairs = 0;
    timer = 0;
    document.getElementById('move-counter').textContent = 'Moves: 0';
    document.getElementById('timer').textContent = 'Time: 0s';
    stopTimer();
    createBoard();
    startTimer();
}

document.addEventListener('DOMContentLoaded', initGame);
