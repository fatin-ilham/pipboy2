@font-face {
  font-family: 'PipBoy';
  src: url('pipboy.ttf') format('truetype'); /* or .otf if you use that */
}

body {
  margin: 0;
  background: black url('background.jpg') center/cover no-repeat;
  color: #00ff00;
  font-family: 'PipBoy', monospace;
  text-shadow: 0 0 3px #00ff00;
  overflow: hidden;
}

.pipboy-screen {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.85);
  height: 100vh;
  box-sizing: border-box;
  position: relative;
}

.terminal-text {
  font-size: 24px;
  animation: typing 4s steps(30, end), flicker 1.5s infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #00ff00;
}

.menu button {
  background-color: transparent;
  border: 1px solid #00ff00;
  color: #00ff00;
  padding: 10px;
  margin: 10px;
  font-family: 'PipBoy', monospace;
  cursor: pointer;
}

.menu button:hover {
  background-color: rgba(0, 255, 0, 0.1);
}

function loadGame(game) {
  const gameArea = document.getElementById("game-area");
  gameArea.innerHTML = '';

  const script = document.createElement("script");
  script.src = `${game}.js`;
  gameArea.appendChild(script);
}
