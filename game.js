class Game {
  constructor(height, width) {
    this.gameScreen = document.querySelector("#game-screen");
    this.gameContainer = document.querySelector("#game-container");
    this.gameIntro = document.querySelector("#game-intro");
    this.gameEnd = document.querySelector("#end-container");
    this.winOrLose = document.querySelector("#win-lose");
    this.scoreDisplay = document.querySelector("#score");
    this.finalMessage = document.querySelector("#final-score");
    this.livesDisplay = document.querySelector("#lives");
    this.timer = document.getElementById("timer");
    this.gameOver = false;
    this.rabbit;
    this.carrot;
    this.item;
    this.height = height;
    this.width = width;
    this.items = [];
    this.lives = 3;
    this.score = 0;
    this.seconds = 45;
    this.feedback = document.createElement("img");
    this.feedbackContainer = document.createElement("div");
    this.feedbackContainer.setAttribute("id", "feedback-container");
    this.gameScreen.appendChild(this.feedbackContainer);
    this.feedback.setAttribute("id", "feedback");
    this.feedbackContainer.appendChild(this.feedback);
    this.feedback.style.visibility = "hidden";
    let music = new Audio("music.mp3");
    music.volume = 0.04;
    document.body.appendChild(music);
  }

  //Start a new game
  start() {
    this.gameContainer.style.display = "flex";
    this.gameContainer.style.flexWrap = "wrap";
    this.gameScreen.style.display = "flex";
    this.gameIntro.style.display = "none";

    this.initializeItems();
    this.newItem();
    this.timeCountdown();

    

    let listener = document.addEventListener("keydown", (e) => {
      //If current item is non-carrot
      if (this.item.className === "item") {
        //If player feeds non-carrot
        if (e.key === "ArrowRight") {
          this.giveFeedback("wrong");
          console.log("Not a carrot, you lost a life :(");
          this.playSound(this.item.id);
          this.item.classList.toggle("slide-out");
          setTimeout(() => {
            this.removeItem();
            this.newItem();
          }, 1900);
          //Checking lives and ending game if no lives left
          if (this.lives <= 1) {
            this.lives = 0;
            this.livesDisplay.innerText = `Lives:${this.lives}`;
            setTimeout(() => {
              console.log("game over");
              this.endGame();
            }, 1901);
            //Lowering lives and producing next item
          } else {
            this.lives--;
            this.livesDisplay.innerText = `Lives:${this.lives}`;
          }
        }
        if (e.key === "ArrowDown") {
          console.log("Tossed");
          this.item.classList.toggle("slide-in");
          this.playSound("toss");
        setTimeout(() => {
            this.removeItem();
            this.newItem();
          }, 900);
        }
        //If current item is carrot
      } else {
        //If player throws carrot out
        if (e.key === "ArrowDown") {
          console.log("Tossed");
          this.item.classList.toggle("slide-in");
          this.playSound("toss");
        setTimeout(() => {
            this.removeItem();
            this.newItem();
          }, 900);
        }
        //If player feeds carrot
        if (e.key === "ArrowRight") {
          this.giveFeedback("correct");
          this.item.classList.toggle("slide-out");
          console.log("Eating carrot");
          this.playSound("carrot");
          this.score += 10;
          this.scoreDisplay.innerText = `Score:${this.score}`;
          setTimeout(() => {
            this.removeItem();
            this.newItem();
          }, 1900);
        }
      }
    })
  }
  //Generate 0 or 1 to determine carrot (0) or non-carrot (1)
  getRandomNum() {
    return Math.floor(Math.random() * 2);
  }

  //Setting up an array of non carrot items
  initializeItems() {
    //Setting up lizard
    let item1 = document.createElement("img");
    item1.setAttribute("id", "lizard");
    item1.setAttribute("class", "item");
    item1.setAttribute("src", "lizard.png");

    //Setting up wrench
    let item2 = document.createElement("img");
    item2.setAttribute("id", "wrench");
    item2.setAttribute("class", "item");
    item2.setAttribute("src", "wrench.png");

    //Setting up pencil
    let item3 = document.createElement("img");
    item3.setAttribute("id", "pencil");
    item3.setAttribute("class", "item");
    item3.setAttribute("src", "pencil.png");

    //Setting up candle
    let item4 = document.createElement("img");
    item4.setAttribute("id", "candle");
    item4.setAttribute("class", "item");
    item4.setAttribute("src", "candle.png");

    //Setting up candy corn
    let item5 = document.createElement("img");
    item5.setAttribute("id", "bat");
    item5.setAttribute("class", "item");
    item5.setAttribute("src", "bat.png");

    //Pushing all items into the array
    this.items.push(item1, item2, item3, item4, item5);

    //Creating Carrot
    this.carrot = document.createElement("img");
    this.carrot.setAttribute("id", "6");
    this.carrot.setAttribute("class", "carrot");
    this.carrot.setAttribute("src", "carrot.png");
  }

  newItem() {
    // Getting either 0 or 1 to determine Carrot (0) or Other(1)
    let index = this.getRandomNum();

    // Creating a div and img tag to hold the next item and setting display to none
    let itemContainer = document.createElement("div");
    itemContainer.setAttribute("id", "item-container");
    this.gameScreen.appendChild(itemContainer);
    this.item = document.createElement("img");
    this.item.setAttribute("class", "item");
    itemContainer.appendChild(this.item);
    this.item.style.display = "none";

    //If Item, generate new index for item. If Carrot, set image to carrot
    if (index !== 0) {
      let itemIndex = Math.floor(Math.random() * 5);
      let currentItem = this.items[itemIndex];
      this.item.setAttribute("src", `${currentItem.src}`);
      this.item.setAttribute("id", `${currentItem.id}`);
    } else {
      this.item.setAttribute("class", "carrot");
      this.item.setAttribute("src", `${this.carrot.src}`);
    }
    //Reveal the image
    this.item.style.display = "block";
  }

  removeItem() {
    //Removing the item after eating/tossing
    this.item.parentNode.remove();
    this.item.remove();
  }

  endGame() {
    //Makes end screen visible with either win or lose displays.
    this.gameOver = true;
    this.gameContainer.style.display = "none";
    this.gameScreen.style.display = "none";
    this.gameEnd.style.display = "flex";
    this.gameEnd.style.display = "flex";
    this.gameEnd.style.flexWrap = "wrap";
    this.winOrLose.style.display = "flex";
    if (this.score < 100 && this.lives <= 0) {
      this.winOrLose.style.backgroundImage = "url('lose_screen.jpg')";
      this.finalMessage.innerText = `GAME OVER`;
    } else if (this.score < 100 && this.lives > 0){
      this.winOrLose.style.backgroundImage = "url('times_up.jpg')";
      this.finalMessage.innerText = `GAME OVER`;
    } else {
      this.winOrLose.style.backgroundImage = "url('win_screen.jpg')";
      this.finalMessage.innerText = `FINAL SCORE:${this.score}`;
    }
  }

  timeCountdown() {
    let timerIntervalId = setInterval(() => {
      this.seconds--;
      this.timer.innerText = `Timer: 00:${this.seconds}`;
      if (this.seconds < 10) {
        this.timer.innerText = `Timer: 00:0${this.seconds}`;
      }
      if (this.seconds === -1) {
        clearInterval(timerIntervalId);
        this.endGame();
      }
    }, 1000);
  }

  playSound(item) {
    if (this.gameOver === false) {
      let sound = document.createElement("audio");
      sound.volume = 0.25;
        if (item === "toss") {
        sound.setAttribute("src", "cartoon_throw_trimmed.mp3");
        sound.setAttribute("autoplay", true);
      } else {
        sound.setAttribute("src", "munch.mp3");
        sound.setAttribute("autoplay", true);
      }
      sound.remove();
    }
  }

  giveFeedback(type) {
    if (type === "wrong") {
      this.feedback.style.visibility = "visible";
      this.feedback.setAttribute("src", "wrong.png");
      setTimeout(function () {
        this.feedback.style.visibility = "hidden";
      }, 1000);
    } 
    if (type === "correct") {
      this.feedback.style.visibility = "visible";
      this.feedback.setAttribute("src", "yum.png");
      setTimeout(function () {
        this.feedback.style.visibility = "hidden";
      }, 1000);
    }
  }
}
