// const canvasEl = document.querySelector("canvas");
// const canvasContext = canvasEl.getContext("2d");

// const FPS = 60;
// let radius = 50;
// let xP, yP;
// let xV, yV;

// xP = canvasEl.width / 2;
// yP = canvasEl.height / 2;

// xV = Math.floor(Math.random() * 201 + 99) / FPS;
// yV = Math.floor(Math.random() * 201 + 99) / FPS;

// // coin toss situation
// if (Math.floor(Math.random() * 2) === 0) {
//   xV = -xV;
// }

// if (Math.floor(Math.random() * 2) === 0) {
//   yV = -yV;
// }

// // The Game Loop
// function runGame() {
//   //----------------- moving the ball from its current position
//   xP += xV;
//   yP += yV;

//   //--------------- clearing the canvas
//   canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);

//   //------------------- Collision Detection
//   // bottom boundary
//   if (yV > 0 && yP >= canvasEl.height - radius) {
//     yV = -yV;
//   }

//   // right boundary
//   if (xV > 0 && xP > canvasEl.width - radius) {
//     xV = -xV;
//   }

//   // top boundary
//   if (yV < 0 && yP <= radius) {
//     yV = -yV;
//   }

//   // left boundary
//   if (xV < 0 && xP <= radius) {
//     xV = -xV;
//   }

//   // ----------------Drawing the ball
//   canvasContext.beginPath();
//   canvasContext.fillStyle = "orange";
//   canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
//   canvasContext.fill();
// }

// // set interval
// setInterval(runGame, 1000 / FPS);

// get busy living or get busy dying

/*
my code below
*/

const canvasEl = document.querySelector("canvas");
const canvasCTX = canvasEl.getContext("2d");

const FPS = 60;
let radius = 50;
let xP, yP;
let xV, yV;

xP = canvasEl.width / 2;
yP = canvasEl.height / 2;

xV = Math.floor(Math.random() * 201 + 99) / FPS;
yV = Math.floor(Math.random() * 201 + 99) / FPS;

// coin toss situation

if (Math.floor(Math.random() * 2) === 0) {
  xV = -xV;
}

if (Math.floor(Math.random() * 2) === 0) {
  yV = -yV;
}

// the game loop

function runGame() {
  // moving the ball from its current position
  xP += xV;
  yP += yV;

  // clearing the canvas
  canvasCTX.clearRect(0, 0, canvasEl.width, canvasEl.height);

  // draw the ball
  canvasCTX.beginPath();
  canvasCTX.fillStyle = "red";
  canvasCTX.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasCTX.lineWidth = 10;
  canvasCTX.strokeStyle = "black";
  canvasCTX.stroke();
  canvasCTX.fill();
}

setInterval(runGame, 1000 / FPS);
