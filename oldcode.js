class Game {
    constructor(height, width) {
      this.gameScreen = document.querySelector("#game-screen");
      this.gameContainer = document.querySelector("#game-container");
      this.gameIntro = document.querySelector("#game-intro");
      this.gameEnd = document.querySelector("#game-end");
      this.rabbit;
      this.carrot;
      this.item ;
      this.height = height;
      this.width = width;
      this.items = [];
    }
  
    start() {
        this.gameContainer.style.display = "flex";
        this.gameContainer.style.flexWrap = "wrap";
        this.gameScreen.style.display = "flex";
        this.gameIntro.style.display = "none";
  
        this.initializeItems();
        this.newItem()
    }
  
    getRandomNum() {
      return Math.floor(Math.random() * 2);
    }
  
    initializeItems() {
      //Setting up an array of non carrot items
  
      //Setting up lizard
      let item1 = document.createElement("img");
      item1.setAttribute("id", "1");
      item1.setAttribute("class", "item");
      item1.setAttribute("src", "lizard.png");
  
      //Setting up wrench
      let item2 = document.createElement("img");
      item2.setAttribute("id", "2");
      item2.setAttribute("class", "item");
      item2.setAttribute("src", "wrench.png");
  
      //Setting up pencil
      let item3 = document.createElement("img");
      item3.setAttribute("id", "3");
      item3.setAttribute("class", "item");
      item3.setAttribute("src", "pencil.png");
  
      //Setting up candle
      let item4 = document.createElement("img");
      item4.setAttribute("id", "4");
      item4.setAttribute("class", "item");
      item4.setAttribute("src", "candle.png");
  
      //Setting up candy corn
      let item5 = document.createElement("img");
      item5.setAttribute("id", "5");
      item5.setAttribute("class", "item");
      item5.setAttribute("src", "candy_corn.png");
  
      //Pushing all items into the array
      this.items.push(item1, item2, item3, item4, item5);
  
      //Creating Carrot
      this.carrot = document.createElement("img");
      this.carrot.setAttribute("id", "6");
      this.carrot.setAttribute("class", "carrot");
      this.carrot.setAttribute("src", "carrot.png");
  
      // Logic to pick an item at random
      // let introScreen = document.getElementById('game-intro');
      // let image = document.createElement('img');
      // image.style.display = 'none';
      // image.setAttribute('src', `${item4.src}`);
    }
  
    newItem() {
      // Getting either 0 or 1 to determine Carrot (0) or Other(1)
      let index = this.getRandomNum();
  
      // Creating img tag for the item and setting display to none
  
      this.item = document.createElement("img");
      this.item.setAttribute("class", "item");
      this.gameScreen.appendChild(this.item);
      this.item.style.display = "none";
  
      //If Item, generate new index for item
      if (index !== 0) {
        let itemIndex = Math.floor(Math.random() * 5);
        let currentItem = this.items[itemIndex];
        this.item.setAttribute("src", `${currentItem.src}`);
      } else {
        this.item.setAttribute("src", `${this.carrot.src}`);
      }
  
      this.item.style.display = "block";
    }
  }
  