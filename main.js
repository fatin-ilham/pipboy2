function loadGame(game) {
  const gameArea = document.getElementById("game-area");
  gameArea.innerHTML = '';

  const script = document.createElement("script");
  script.src = `${game}.js`;
  gameArea.appendChild(script);
}
