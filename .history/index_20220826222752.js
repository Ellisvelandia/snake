const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 60;

function drawGame() {
  setTimeout(drawGame, 100 / speed);
}

drawGame();
