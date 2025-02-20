const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

let gameRunning = false;
let player = { x: 200, y: 200, width: 10, height: 10, dx: 0, dy: 0, trail: [] };
let enemies = [];
let score = 0;
let lives = 3;
let grid = Array.from({ length: 40 }, () => Array(40).fill(false));
let speed = 5;

function startGame() {
    gameRunning = true;
    player.x = Math.floor(Math.random() * 40) * 10;
    player.y = Math.floor(Math.random() * 40) * 10;
    player.trail = [];
    enemies = [
        { x: 50, y: 50, dx: 10, dy: 0 },
        { x: 350, y: 350, dx: -10, dy: 0 }
    ];
    score = 0;
    lives = 3;
    grid = Array.from({ length: 40 }, () => Array(40).fill(false));
    speed = 5;
    requestAnimationFrame(gameLoop);
}

document.getElementById('startButton').addEventListener('click', startGame);

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (player.dy === 0) {
                player.dx = 0;
                player.dy = -speed;
            }
            break;
        case 'ArrowDown':
            if (player.dy === 0) {
                player.dx = 0;
                player.dy = speed;
            }
            break;
        case 'ArrowLeft':
            if (player.dx === 0) {
                player.dx = -speed;
                player.dy = 0;
            }
            break;
        case 'ArrowRight':
            if (player.dx === 0) {
                player.dx = speed;
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

    // Agregar posición actual al trazado
    player.trail.push({ x: player.x, y: player.y });

    // Verificar si el jugador cierra un área
    if (isClosedArea()) {
        fillClosedArea();
        player.trail = [];
    }

    // Verificar colisiones con el trazo
    for (let i = 0; i < player.trail.length - 1; i++) {
        if (player.x === player.trail[i].x && player.y === player.trail[i].y) {
            loseLife();
        }
    }
}

function drawTrail() {
    ctx.fillStyle = '#ff0';
    player.trail.forEach(point => {
        ctx.fillRect(point.x, point.y, player.width, player.height);
    });
}

function isClosedArea() {
    const startX = player.trail[0].x;
    const startY = player.trail[0].y;
    const lastX = player.trail[player.trail.length - 1].x;
    const lastY = player.trail[player.trail.length - 1].y;

    if (startX !== lastX || startY !== lastY) return false;

    const minX = Math.min(...player.trail.map(point => point.x / 10));
    const maxX = Math.max(...player.trail.map(point => point.x / 10));
    const minY = Math.min(...player.trail.map(point => point.y / 10));
    const maxY = Math.max(...player.trail.map(point => point.y / 10));

    for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
            if (!grid[y][x]) {
                let isBoundary = false;
                for (let i = 0; i < player.trail.length; i++) {
                    if (player.trail[i].x === x * 10 && player.trail[i].y === y * 10) {
                        isBoundary = true;
                        break;
                    }
                }
                if (!isBoundary) return false;
            }
        }
    }

    return true;
}

function fillClosedArea() {
    const minX = Math.min(...player.trail.map(point => point.x / 10));
    const maxX = Math.max(...player.trail.map(point => point.x / 10));
    const minY = Math.min(...player.trail.map(point => point.y / 10));
    const maxY = Math.max(...player.trail.map(point => point.y / 10));

    for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
            grid[y][x] = true;
            ctx.fillStyle = '#0f0';
            ctx.fillRect(x * 10, y * 10, 10, 10);
        }
    }

    score += (maxX - minX + 1) * (maxY - minY + 1);
    document.getElementById('score').textContent = `Score: ${score}`;
}

function drawEnemies() {
    ctx.fillStyle = '#f00';
    enemies.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, 10, 10);
    });
}

function updateEnemies() {
    enemies.forEach(enemy => {
        enemy.x += enemy.dx;
        enemy.y += enemy.dy;

        // Colisiones con los bordes
        if (enemy.x < 0 || enemy.x + 10 > canvas.width) enemy.dx *= -1;
        if (enemy.y < 0 || enemy.y + 10 > canvas.height) enemy.dy *= -1;

        // Verificar colisiones con el trazo del jugador
        for (let i = 0; i < player.trail.length; i++) {
            if (enemy.x === player.trail[i].x && enemy.y === player.trail[i].y) {
                loseLife();
            }
        }

        // Verificar colisiones con el jugador
        if (enemy.x === player.x && enemy.y === player.y) {
            loseLife();
        }
    });
}

function loseLife() {
    lives--;
    document.getElementById('lives').textContent = `Vidas: ${lives}`;

    if (lives <= 0) {
        gameOver();
    } else {
        resetPlayer();
    }
}

function resetPlayer() {
    player.x = Math.floor(Math.random() * 40) * 10;
    player.y = Math.floor(Math.random() * 40) * 10;
    player.trail = [];
}

function gameOver() {
    gameRunning = false;
    alert('Game Over!');
}

function checkWinCondition() {
    let capturedCells = 0;
    let totalCells = 40 * 40;

    for (let y = 0; y < 40; y++) {
        for (let x = 0; x < 40; x++) {
            if (grid[y][x]) capturedCells++;
        }
    }

    if (capturedCells / totalCells >= 0.75) {
        gameRunning = false;
        alert('¡Has ganado!');
    }
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
    drawTrail();
    drawEnemies();
    updateEnemies();
    drawScore();
    checkWinCondition();

    requestAnimationFrame(gameLoop);
}
