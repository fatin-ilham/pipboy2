function loadGame(game) {
  const gameArea = document.getElementById("game-area");
  gameArea.innerHTML = ''; // Clear previous game

  if (game === 'snake') {
    startSnakeGame();
  } else if (game === 'tetris') {
    gameArea.innerHTML = '<p style="color:#0f0;">Tetris is under development.</p>';
  }
}
