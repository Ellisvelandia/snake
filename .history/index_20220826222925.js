const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 7;


// game  loop

function drawGame() {
  setTimeout(drawGame, 100 / speed);
}


function clearScreen() {
 ctx.fillStyle = 'black' 
 ctx.fillRect(0,0)
}


drawGame();
