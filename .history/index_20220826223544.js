const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 7;

let tileCount = 20;
let tileSize = 
let headX = 10;
let headY = 10;

// game  loop

function drawGame() {
  clearScreen();
  setTimeout(drawGame, 100 / speed);
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawGame();
