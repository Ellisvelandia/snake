const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;
const snakePart = [];
let tailLenght = 2;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

// game  loop

function drawGame() {
  clearScreen();
  changeSnakePosition();

  checkAppleCollision();
  drawApple();
  drawSnake();
  setTimeout(drawGame, 1000 / speed);
}

function clearScreen() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "#ffa500	";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);

  ctx.fillStyle = "green";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new SnakePart (head))
}

function changeSnakePosition() {
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}

function drawApple() {
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function checkAppleCollision() {
  if (appleX === headX && appleY == headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLenght++;
  }
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
  // up
  if (event.keyCode == 38) {
    if (yVelocity == 1) return;
    yVelocity = -1;
    xVelocity = 0;
  }

  // down
  if (event.keyCode == 40) {
    if (yVelocity == -1) return;
    xVelocity = 1;
    yVelocity = 0;
  }

  // left
  if (event.keyCode == 37) {
    if (xVelocity == 1) return;
    xVelocity = 0;
    yVelocity = -1;
  }

  // right
  if (event.keyCode == 39) {
    if (xVelocity == -1) return;
    xVelocity = 0;
    yVelocity = 1;
  }
}

drawGame();
