const DOWN = 'down';
const UP = 'up';
let startingX = 25;
let startingY = 25;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};

// IMAGES for card front and back
let cardfaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('cards/front.png');
    cardfaceArray = [
        loadImage('cards/arches.png'),
        loadImage('cards/bryce.png'),
        loadImage('cards/canyonlands.png'),
        loadImage('cards/capitolreef.png'),
        loadImage('cards/glacier.png'),
        loadImage('cards/grandcanyon.png'),
        loadImage('cards/yellowstone.png'),
        loadImage('cards/zion.png'),
    ]
}

// SETUP 
function setup() {
    createCanvas(950, 950);
    background('aliceblue');
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const cardfaceImg = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, cardfaceImg));
            startingX += 175;
        }
        startingY += 225;
        startingX = 25;
    }
}

// draw function
function draw() {
    background('cadetblue');
    if (gameState.numMatched === gameState.totalPairs) {
        fill('seashell');
        textSize(40);
        text('YOU WIN!', 725, 200);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if (!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('seashell');
    textSize(36);
    text('attempts: ' + gameState.attempts, 725, 500);
    text('matches: ' + gameState.numMatched, 725, 450);
}

// flip function
function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // limits cards guessed to 2, and then trigger flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardfaceImg === gameState.flippedCards[1].cardfaceImg) {
            // Cards Match! Mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            console.log('cards match!'); // CONSOLE IS NOT LOGGING MATCH, SOMETHING IS OFF ^^
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000); // can make game harder by decreasing time, or not giving timeout
        }
    }
}

// CARD CLASS with show and flip method
class Card {
    constructor(x, y, cardfaceImg) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 200;
        this.face = DOWN;
        this.cardfaceImg = cardfaceImg;
        this.isMatch = false;
        this.show();
    }
    show() {
        if (this.face === UP || this.isMatch) {
            // face up
            noStroke();
            rect(this.x, this.y, this.width, this.height, 5);
            image(this.cardfaceImg, this.x, this.y, this.width, this.height)
        } else {
            // face down
            noStroke();
            rect(this.x, this.y, this.width, this.height, 5);
            image(cardBack, this.x, this.y, this.width, this.height)
        }
    }

    didHit(mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    flip() {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

// RANDOM SHUFFLE 
function shuffleArray(cardArray) {
    let counter = cardArray.length;
    while (counter > 0) {
        // pick random idx - need to use Math. because this is not in the setup function
        const idx = Math.floor(Math.random() * counter);
        // decrease counter by 1 (decrement)
        counter--;
        // swap with last element
        const temp = cardArray[counter];
        cardArray[counter] = cardArray[idx];
        cardArray[idx] = temp;
    }
    return cardArray;
}