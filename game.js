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

      //Start a new game
      start() {
          this.gameContainer.style.display = "flex";
          this.gameContainer.style.flexWrap = "wrap";
          this.gameScreen.style.display = "flex";
          this.gameIntro.style.display = "none";
    
          this.initializeItems();
          this.newItem()
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
        item5.setAttribute("id", "candycorn");
        item5.setAttribute("class", "item");
        item5.setAttribute("src", "candy_corn.png");
    
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
        let itemContainer = document.createElement('div');
        itemContainer.setAttribute('id', 'item-container');
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
          this.item.setAttribute('id', `${currentItem.id}`)
        } else {
          this.item.setAttribute("class", "carrot");
          this.item.setAttribute("src", `${this.carrot.src}`);
        }
        //Reveal the image
        this.item.style.display = "block";
      }
    }
    