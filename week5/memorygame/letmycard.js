const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 130;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardfaceArray = [];
let cardback;

//load in images
function preload() {
    fontRegular = loadFont('fonts/Wayfarer-Regular.otf');
    cardback = loadImage('images/cardback_reversed.png');
    cardfaceArray = [
        loadImage('images/dice.png'),
        loadImage('images/eye.png'),
        loadImage('images/fortuneteller.png'),
        loadImage('images/hand.png'),
        loadImage('images/heart.png'),
        loadImage('images/horseshoe.png'),
        loadImage('images/rabbit.png'),
        loadImage('images/shootingstar.png'),
    ]
}


function setup() {
    createCanvas(1075, 1250);


    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const cardFaceImg = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, cardFaceImg));
            startingX += 220;
        }
        startingY += 250
        startingX = 100;
    }
}

function draw() {
    background('orange');
    if (gameState.numMatched === gameState.totalPairs) {
        fill('black');
        textFont(fontRegular);
        textSize(30);
        text('You have won Good Fortune!', 400, 1170);
        noLoop();
    }
    for (let b = 0; b < cards.length; b++) {
        if (!cards[b].isMatch) {
            cards[b].face = DOWN;
        }
        cards[b].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('black');
    textFont(fontRegular);
    textSize(69);
    text('GOOD FORTunE GamE', 100, 80);
    fill('black');
    noStroke();
    rect(100, 1120, 200, 75);
    fill('white');
    textFont()
    textSize(20);
    text('attempts - ' + gameState.attempts, 120, 1150);
    text('matches - ' + gameState.numMatched, 120, 1175);

}


function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        //first check flipped cards length, and then we can trigger the flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0;
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeOut = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeOut);
            }, 1000)
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show() {
        if (this.face === UP || this.isMatch) {
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y);
        } else {
            rect(this.x, this.y, this.width, this.height);
            image(cardback, this.x, this.y);
        }
    }

    didHit(mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
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

function shuffleArray(array) {
    let counter = array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}

function reset() {
    window.location.reload();
}