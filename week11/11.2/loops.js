let rotateBy = 15;

function setup() {
    createCanvas(900, 950);
    background(0);
    angleMode(DEGREES);
    r = random(255);
    g = random(255);
    b = random(255);


    button = createButton('pause');
    button.size(60, 30);
    button.position(400, 910);
    button.mousePressed(noLoop);

    button = createButton('color');
    button.size(60, 30);
    button.position(480, 910);
    button.mousePressed(loop);

}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    //for (let i = 0; i < 5; i++) {
    //    stroke(random(255), i * 35, 255 - i * 45);
    //    strokeWeight(1);
    //    ellipse(200, 250 + alt, 150 / alt); // use times * or divided by / or different shapes
    //}
    stroke('lightgrey');
    bezier(alt - 140, alt + 190, 10, 10, 490, 10, 50, 150);
    stroke(r, g, b);
    ellipse(200, 250 + alt, 150 / alt); // use times * or divided by / or different shapes
    ellipse(100, 10 + alt, 150 / alt);
    triangle(50, 20, 18, 300, 50, 360);

}
function draw() {
    translate(450, 450);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 3;
}
function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
} 
