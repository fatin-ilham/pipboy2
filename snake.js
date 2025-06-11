const gameArea = document.getElementById("game-area");
gameArea.innerHTML = `<canvas id="snakeCanvas" width="400" height="400"></canvas>`;

const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 200, y: 200 }];
let food = {
  x: Math.floor(Math.random() * 20) * box,
  y: Math.floor(Math.random() * 20) * box
};
let direction = "RIGHT";

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
});

function drawGame() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, 400, 400);

  // Snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "#0f0" : "#090";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  // Food
  ctx.fillStyle = "#f00";
  ctx.fillRect(food.x, food.y, box, box);

  // Move
  let head = { ...snake[0] };
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;

  // Game over
  if (
    head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 ||
    snake.some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    clearInterval(gameLoop);
    alert("GAME OVER");
    return;
  }

  snake.unshift(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box
    };
  } else {
    snake.pop();
  }
}

const gameLoop = setInterval(drawGame, 150);
