window.alert("Ready to Play? Click the moving target to earn points!");
let rectX = 0;
const rectHeight = 50;
let rectY;
const rectWidth = 50;
let clickCount = 0;
let speed;
function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
}

function draw() {
    background('lightblue');
    drawShape();
    rectX += speed;
    if (rectX > width) {
        noLoop();
        fill('black');
        textSize(24);
        text('Your score was ' + clickCount + '!', 140, 240);
    }
}

function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }

}

function drawShape() {
    fill('red');
    rect(rectX, rectY, rectWidth, rectHeight);
}