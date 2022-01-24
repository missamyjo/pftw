let grid = undefined;
let stroke1 = prompt("in lowercase, enter a basic color", "black");
let stroke2 = prompt("pick another basic color", "red");

function setup() {
    createCanvas(1000, 800);
    background("lightblue");
    grid = loadImage("img/100px_grid.png");
}

function draw() {
    //  background(grid);
    //snowman legs
    fill("#f1f1f1")
    stroke(stroke1)
    strokeWeight(20)
    //left leg
    ellipse(350, 650, 200)
    //right leg
    ellipse(650, 650, 200)
    // body
    ellipse(500, 450, 400, 400)
    // head
    ellipse(500, 200, 200)
    // hat brim
    stroke(stroke2)
    strokeWeight(34)
    line(400, 130, 600, 130);
    // hat body
    fill(stroke2)
    triangle(500, 40, 540, 100, 460, 100);
    // eyes
    stroke(0)
    strokeWeight(50)
    point(450, 180)
    point(550, 180)
    // smile
    noFill()
    strokeWeight(10)
    arc(500, 220, 120, 100, 0, PI)
}