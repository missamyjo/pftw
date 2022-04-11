// Creating Multiples https://js6450.github.io/iterative.html

var col = 7;
var row = 7;

var c_width, c_height;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    colorMode(HSB);
    noStroke();
    background(0);

    c_width = width / col;
    c_height = height / row;
}

function draw() {
    background('black');

    for (var j = 0; j < row; j++) {
        for (var i = 0; i < col; i++) {
            push();
            translate(i * c_width + c_width / 2, j * c_height + c_height / 2);
            rotate(frameCount * 0.01);
            fill(frameCount % 150, 50, 80);
            ellipse(0, 0, 100, 60);
            fill(frameCount % 200, 120, 150);
            rotate(frameCount * .03);
            ellipse(0, 0, 50, 50);
            pop();
        }
    }
}
function mouseClicked() {
    saveCanvas('eyeballs', 'png')
}
