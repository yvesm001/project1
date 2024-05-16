window.onload = function () {
  let game;
  game = new Game();

  const playButton = document.getElementById("play-button");

  playButton.addEventListener("click", function () {
    console.log("Starting new game");
    game.start();
    
  });
}
