let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "black");
let stroke2 = prompt("enter another basic color lower case", "red");
function setup() {
    createCanvas(1000, 800);
    background("lightblue");
    grid = loadImage("img/100px_grid.png");
}
function draw() {
    background(grid);
    //snowman legs
    fill("green");
    strokeWeight(10);
    stroke(stroke1);
    //left leg
    //ellipse(350, 650, 200);
    //right leg
    //ellipse(650, 650, 200);
    //bottom

    // body
    ellipse(500, 515, 250);
    // head
    ellipse(500, 285, 250);
    //ellipse(500, 160, 180, 280);
    // hat brim
    // stroke(stroke2);
    // strokeWeight(40);
    // line(400, 120, 600, 120);
    // hat body
    // quad(450, 50, 600, 50, 550, 120, 450, 120);
    // eyes
    //strokeWeight(60);
    stroke(0);
    fill(0);
    ellipse(460, 150, 60, 30);
    ellipse(540, 150, 60, 30);
    //point(450, 150);
    //point(525, 150);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 240, 30, 4, 0, PI);
}