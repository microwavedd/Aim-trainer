const balls = document.querySelectorAll('.ball');
const gameArea = document.getElementById('gameArea');
const gameAreaWidth = gameArea.offsetWidth;
const gameAreaHeight = gameArea.offsetHeight;

function getRandomPosition() {
    const x = Math.random() * (gameAreaWidth - 50); // 50 is the ball width
    const y = Math.random() * (gameAreaHeight - 50); // 50 is the ball height
    return { x, y };
}

function showBalls() {
    balls.forEach(ball => {
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
}

function toggleBalls() {
    showBalls();
    setTimeout(() => {
        hideBalls();
        setTimeout(toggleBalls, 1000);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    toggleBalls();
});
