
function initializeItems() {
    //Setting up an array of non carrot items
    let items = [];

    //Setting up lizard
    let item1 = document.createElement('img');
    item1.setAttribute('id', '1');
    item1.setAttribute('class', 'item');
    item1.setAttribute('src', 'lizard.png');
    

    //Setting up wrench
    let item2 = document.createElement('img');
    item2.setAttribute('id', '2');
    item2.setAttribute('class', 'item');
    item2.setAttribute('src', 'wrench.png');

    //Setting up pencil
    let item3 = document.createElement('img');
    item3.setAttribute('id', '3');
    item3.setAttribute('class', 'item');
    item3.setAttribute('src', 'pencil.png');

    //Setting up candle
    let item4 = document.createElement('img');
    item4.setAttribute('id', '4');
    item4.setAttribute('class', 'item');
    item4.setAttribute('src', 'candle.png');
    

    //Setting up candy corn
    let item5 = document.createElement('img');
    item5.setAttribute('id', '5');
    item5.setAttribute('class', 'item');
    item5.setAttribute('src', 'candy_corn.png');

    //Pushing all items into the array
    items.push(item1, item2, item3, item4, item5);

    //Creating Carrot
    let carrot = document.createElement('img')
    carrot.setAttribute('id', '6');
    carrot.setAttribute('class', 'carrot');
    carrot.setAttribute('src', 'carrot.png')

    // Logic to pick an item at random
    // let introScreen = document.getElementById('game-intro');
    // let image = document.createElement('img');
    // image.style.display = 'none';
    // image.setAttribute('src', `${item4.src}`);


   let randomNum = Math.floor(Math.random() * 2);

    // Getting either 0 or 1 to determine Carrot (0) or Other(1)
    let index = randomNum;
    
    // Creating img tag for the item and setting display to none
    let gameScreen = document.getElementById('game-screen');
    let image = document.createElement('img');
    image.style.width = 250;
    image.style.height = 100;
    gameScreen.appendChild(image);
    image.style.display = 'none';

    //If Item, generate new index for item
    if (index !== 0) {
        let itemIndex = Math.floor(Math.random() * 6);
        let currentItem = items[itemIndex];
        image.setAttribute('src', `${currentItem.src}`);
    } else {
        image.setAttribute('src', `${carrot.src}`);
    }
    
    image.style.display = "block";

};
