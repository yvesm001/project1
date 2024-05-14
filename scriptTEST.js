window.onload = function () {
    let game;
  
    const playButton = document.getElementById("play-button");
  
    playButton.addEventListener("click", function () {
      console.log("Starting new game");
      game = new Game();
      game.start();
      
    });
  }
  