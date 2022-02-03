function setup() {
    createCanvas(200, 200);
    noLoop();
}
function createTile() {
    translate(0, 0);
    fill('pink');
    stroke('red');
    strokeWeight(16);
    rect(0, 0, 200, 200);
    noFill();
    stroke('red');
    strokeWeight(8);
    rect(60, 5, 135, 120);
    noFill();
    stroke('red');
    strokeWeight(8);
    rect(4, 76, 135, 120);
    fill('white');
    noStroke;
    rect(60, 76, 79, 50);
}

function draw() {
    createTile();
}