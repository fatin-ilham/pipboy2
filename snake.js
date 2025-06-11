// Create canvas only if it doesn't exist
if (!document.getElementById("snakeCanvas")) {
  const canvas = document.createElement("canvas");
  canvas.id = "snakeCanvas";
  canvas.width = 400;
  canvas.height = 400;
  canvas.style.border = "1px solid #00ff00";
  canvas.style.backgroundColor = "black";
  document.getElementById("game-area").appendChild(canvas);

  const startBtn = document.createElement("button");
  startBtn.textContent = "▶ Start Snake Game";
  startBtn.style.marginTop = "10px";
  startBtn.style.color = "#00ff00";
  startBtn.style.backgroundColor = "transparent";
  startBtn.style.border = "1px solid #00ff00";
  startBtn.style.fontFamily = "PipBoy, monospace";
  startBtn.style.cursor = "pointer";
  document.getElementById("game-area").appendChild(startBtn);

  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    runSnakeGame();
  });
}

function runSnakeGame() {
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

    // Snake body
    for (let i = 0; i < snake.length; i++) {
      ctx.fillStyle = i === 0 ? "#0f0" : "#090";
      ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Food
    ctx.fillStyle = "#f00";
    ctx.fillRect(food.x, food.y, box, box);

    // Move snake
    let head = { ...snake[0] };
    if (direction === "LEFT") head.x -= box;
    if (direction === "RIGHT") head.x += box;
    if (direction === "UP") head.y -= box;
    if (direction === "DOWN") head.y += box;

    // Game over check
    if (
      head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 ||
      snake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      clearInterval(gameLoop);
      alert("💀 Game Over, Commander.");
      return;
    }

    snake.unshift(head);

    // Food eaten?
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
}
