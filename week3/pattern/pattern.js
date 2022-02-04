function setup() {
    createCanvas(608, 608);
}
function createTile(originX, originY, primaryColor) {
    translate(originX, originY);
    fill(primaryColor);
    stroke('rgb(55, 54, 50)');
    strokeWeight(8);
    rect(5, 5, 200, 200);
    noFill();
    stroke('rgb(55, 54, 50)');
    strokeWeight(8);
    rect(70, 5, 135, 120);
    noFill();
    stroke('rgb(55, 54, 50)');
    strokeWeight(8);
    rect(5, 85, 135, 120);
    fill('rgb(236, 227, 209)');
    noStroke;
    rect(70, 85, 70, 40);
}

function draw() {
    createTile(0, 0, 'rgb(226, 150, 127)');
    createTile(0, 200, 'rgb(199, 184, 55)');
    createTile(0, 200, 'rgb(251, 216, 122)');

    createTile(200, -400, 'rgb(227, 147, 160)');
    createTile(0, 200, 'rgb(81, 106, 87)');
    createTile(0, 200, 'rgb(223, 153, 55)');

    createTile(200, -400, 'rgb(191, 44, 50)');
    createTile(0, 200, 'rgb(25, 137, 151)');
    createTile(0, 200, 'rgb(255, 186, 0)');
}