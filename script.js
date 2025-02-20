const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

let gameRunning = false;
let player = { x: 200, y: 200, width: 10, height: 10, dx: 0, dy: 0 };
let blocks = [];
let score = 0;

function startGame() {
    gameRunning = true;
    player.dx = 0;
    player.dy = 0;
    blocks = [];
    score = 0;
    requestAnimationFrame(gameLoop);
}

document.getElementById('startButton').addEventListener('click', startGame);

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (player.dy === 0) {
                player.dx = 0;
                player.dy = -10;
            }
            break;
        case 'ArrowDown':
            if (player.dy === 0) {
                player.dx = 0;
                player.dy = 10;
            }
            break;
        case 'ArrowLeft':
            if (player.dx === 0) {
                player.dx = -10;
                player.dy = 0;
            }
            break;
        case 'ArrowRight':
            if (player.dx === 0) {
                player.dx = 10;
                player.dy = 0;
            }
            break;
    }
});

function drawPlayer() {
    ctx.fillStyle = '#ff0';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;

    // Colisiones con los bordes
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

function drawBlocks() {
    ctx.fillStyle = '#f00';
    blocks.forEach(block => {
        ctx.fillRect(block.x, block.y, block.width, block.height);
    });
}

function updateBlocks() {
    // Aquí iría la lógica para agregar bloques y detectar colisiones
}

function drawScore() {
    ctx.fillStyle = '#fff';
    ctx.font = '16px Courier New';
    ctx.fillText(`Score: ${score}`, 10, 20);
}

function gameLoop() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    updatePlayer();

    drawBlocks();
    updateBlocks();

    drawScore();

    requestAnimationFrame(gameLoop);
}
