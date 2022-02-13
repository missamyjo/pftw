/*const myCircle = {
    x: 300,
    y: 0,
    width: 150
}*/

const mySquare = {
    x: 300,
    y: 0,
    width: 150,
    height: 175
}
const speed = 1;
function setup() {
    createCanvas(1000, 1000);
}
let cards = [];
function draw() {
    background('lightblue');
    // mySquare.y += speed;
    //fill("#f1f1f1");
    //rect(mySquare.x, mySquare.y, mySquare.width, mySquare.height);
    noLoop();
    fill("red");
    stroke('red');
    for (let j = 1; j < 5; j++) {
        for (let i = 1; i < 5; i++) {
            const newCard = { x: i * 170, y: j * 170, width: 130, height: 130 }
            rect(newCard.x, newCard.y, newCard.width, newCard.height);
            cards.push(newCard);
        }

    }
    console.log('cards', cards);
}

/*function mousePressed() {
    // console.log('clicked', mouseX, mouseY);
    // const distance = dist(mouseX, mouseY, mySquarex, mySquare.y);
    //   console.log('the distrance', distance);
    //  if (distance <= mySquare.width / 2) {
    //       myCircle.x = mySquare.x + 10;
    //       console.log("you clicked it")
    //   }
    if (
        mouseX >= mySquare.x &&
        mouseX <= (mySquare.x + mySquare.width) &&
        mouseY >= mySquare.y &&
        mouseY <= (mySquare.height + mySquare.y)
    ) {
        console.log("hit");
        noLoop;
    }
}*/