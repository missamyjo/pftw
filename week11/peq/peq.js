
// https://p5js.org/examples/math-parametric-equations.html

function setup() {
    createCanvas(windowWidth, windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);
    button = createButton('pause');
    button.size(50, 50);
    button.position(15, 15);
    button.mousePressed(noLoop);

    button = createButton('GO! color');
    button.size(50, 50);
    button.position(15, 70);
    button.mousePressed(loop);

}

// the parameter at which x and y depends is usually taken as either t or symbol of theta
let t = 0;
function draw() {
    background(0);
    translate(width / 2, height / 2);
    stroke(r, g, b);
    strokeWeight(1.5);
    //loop for adding 100 lines
    for (let i = 0; i < 400; i++) {
        10
        line(x1(t + i), y1(t + i), x2(t + i) + 150, y2(t + i) + 50);
    }
    t += 0.15;
}
// function to change initial x co-ordinate of the line
function x1(t) {
    return sin(t / 10) * 125 + sin(t / 20) * 300 + sin(t / 050) * 100;
}

// function to change initial y co-ordinate of the line
function y1(t) {
    return cos(t / 10) * 150 + cos(t / 50) * 150 + cos(t / 30) * 150;
}

// function to change final x co-ordinate of the line
function x2(t) {
    return sin(t / 15) * 200 + sin(t / 50) * 125 + sin(t / 35) * 125;
}

// function to change final y co-ordinate of the line
function y2(t) {
    return cos(t / 30) * 50 + cos(t / 30) * 50 + cos(t / 35) * 50;
}
function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
} 
