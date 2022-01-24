let grid = undefined;
let stroke1 = prompt("what color lines? enter a basic color name in lower case", "black");
let stroke2 = prompt("what color snow creature? pick a basic color in lower case", "red");

function setup() {
    createCanvas(1000, 800);
    background("lightblue");
    grid = loadImage("img/100px_grid.png");
}
function draw() {
    //background(grid);
    //snowman legs
    strokeWeight(10);
    stroke(stroke1);
    //left leg
    //ellipse(350, 650, 200);
    // body
    fill(stroke2);
    ellipse(500, 500, 200);
    // head
    ellipse(500, 305, 200);
    // hat body
    stroke(stroke1);
    fill(stroke2);
    triangle(500, 80, 570, 220, 430, 220);
    // hat brim
    strokeWeight(34)
    line(400, 230, 600, 230);
    // pom pom
    strokeWeight(10);
    stroke(stroke1);
    fill("#FFFFFF");
    ellipse(500, 100, 60);
    // eyes
    strokeWeight(20);
    stroke("#FFFFFF");
    fill(0);
    ellipse(460, 300, 40);
    ellipse(540, 300, 40);
    // mouth
    strokeWeight(10);
    stroke(stroke1);
    arc(500, 350, 80, 70, 0, PI, CHORD);
    //left arm
    strokeWeight(10);
    stroke(stroke1);
    line(400, 500, 300, 500);
    line(300, 500, 300, 600);
    //right arm
    line(600, 500, 700, 500);
    line(700, 500, 700, 400);
    //left leg
    line(475, 575, 400, 700);
    line(400, 700, 350, 650);
    line(350, 650, 300, 700);
    //right leg
    line(525, 600, 625, 750);
    line(625, 750, 675, 725);
}