const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 7;

let titleCount = 20;
let headX = 10;
let headY = 10;

// game  loop

function drawGame() {
  clear
  setTimeout(drawGame, 100 / speed);
}

function clearScreen() {
    ctx.fillStyle = "black";
  ctx.fillRect(0, 0,canvas.width,canvas.height);
}

drawGame();
