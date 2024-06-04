const balls = document.querySelectorAll('.ball');
const gameArea = document.getElementById('gameArea');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highScore');
let score = 0;
let highScore = 0;
let ballsClicked = 0;

const gameAreaWidth = gameArea.offsetWidth;
const gameAreaHeight = gameArea.offsetHeight;

function getRandomPosition() {
    const x = Math.random() * (gameAreaWidth - 50);
    const y = Math.random() * (gameAreaHeight - 50);
    return { x, y };
}

function showBalls() {
    ballsClicked = 0;
    balls.forEach(ball => {
        ball.dataset.clicked = 'false';
        const { x, y } = getRandomPosition();
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
        ball.classList.remove('null');
    });
}

function hideBalls() {
    balls.forEach(ball => {
        ball.classList.add('null');
    });
    if (ballsClicked < balls.length) {
        resetScore();
    } else {
        updateScore();
    }
}

function toggleBalls() {
    showBalls();
    setTimeout(() => {
        hideBalls();
        setTimeout(toggleBalls, 1000);
    }, 3000);
}

function handleBallClick(event) {
    if (event.target.dataset.clicked === 'false') {
        event.target.dataset.clicked = 'true';
        event.target.classList.add('null');
        score += 50;
        ballsClicked++;
        updateScore();
    }
}

function resetScore() {
    if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
    }
    score = 0;
    scoreElement.textContent = score;
}

function updateScore() {
    scoreElement.textContent = score;
}

document.addEventListener('DOMContentLoaded', () => {
    balls.forEach(ball => {
        ball.addEventListener('click', handleBallClick);
    });
    toggleBalls();
});
