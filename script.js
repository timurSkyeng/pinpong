const map = document.querySelector('#game');
const canvans = map.getContext('2d');
canvans.fillstyle = 'rgb(228, 164, 87)';


const grid = 15;
const paddleHeight = grid * 5;
const maxPaddleY = map.height - grid - paddleHeight;

let ballspeed = 5;
let paddleSpeed = 7;

const leftpenddle = {
    x: grid * 2,
    y: map.height / 2 - paddleHeight / 2,
    Width:grid,
    heigh: paddleHeight,
    dy: 0, 
}

const rightpaddle = {
    x: map.Width - grid * 3,
    y: map.height / 2 - paddleHeight / 2,
    Width:grid,
    heigh: paddleHeight,
    dy: 0, 
}

const ball = {
    x: map.Width / 2,
    y: map.height / 2,
    Width:grid,
    heigh:grid,
    resetting:false,
    dx:ballspeed,
    dy:-ballspeed,
    isResetted:false,
}

function renderMap() {
    canvas.fillRect(0, 0, map.width, grid); // Верхняя граница
    canvas.fillRect(0, map.height - grid, map.width, grid) // Нижняя граница

    for (let i = grid; i < map.height - grid; i += grid * 2) {
        canvas.fillRect(map.width / 2, i, grid, grid); // Разделительная линия
    }
}

function renderLeftPaddle() {
    canvas.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
}

function renderRightPaddle() {
    canvas.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
}

function movePaddles() {
    leftPaddle.y += leftPaddle.dy;
    rightPaddle.y += rightPaddle.dy;
}

function clearMap() {
    canvas.createRect (0, 0, map.width, map.height);
}

function loop () {
    clearMap();
    renderLeftPaddle();
    renderRightPaddle();

    movePaddles();

    renderMap();
    requestAnimationFrame(loop);
}

document.addEventListener('keydown' , (event) =>{
    console.log(event.key);
    if(event.key === 'w') {
        leftPaddle.dy = -paddleSpeed;
    } else if (event.key === 's') {
        leftPaddle.dy = paddleSpeed;
    }
})

document.addEventListener('keyap' , (event) => {
    console.log (event.key);
    if (event.key === 'w' ) {
        leftPaddle.dy = -0;
    } else if (event.key === 's' ) {
        leftPaddle.dy = -0;
    }
} )
requestAnimationFrame(loop);