// Creating Multiples https://js6450.github.io/iterative.html

var circles = [];
var num_circles = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);

    noStroke();

    for (var i = 0; i < num_circles; i++) {
        circles.push(new Circle(width / 2, height / 2));
        circles.push(new Circle(width / 3.5, height / 3.5));
        circles.push(new Circle(width / 1.5, height / 1.5));

    }

}
function draw() {
    background('black');

    for (var i = 0; i < circles.length; i++) {
        circles[i].checkBoundary();
        circles[i].update();
        circles[i].display();
    }
}

function Circle(i, j) {
    this.xorigin = i;
    this.yorigin = j;
    this.xpos = i;
    this.ypos = j;
    this.size = random(75, 150);
    this.c = color(random(255), random(255), random(255), 150);
    this.xspeed = random(-3, 3);
    this.yspeed = random(-3, 3);

    this.display = function () {
        fill(this.c);
        ellipse(this.xpos, this.ypos, this.size, this.size);
    }

    this.update = function () {
        this.xpos += this.xspeed;
        this.ypos += this.yspeed;
    }

    this.checkBoundary = function () {
        if (this.xpos > width || this.xpos < 0 || this.ypos < 0 || this.ypos > height) {
            this.xpos = this.xorigin;
            this.ypos = this.yorigin;
        }
    }
}
function mouseClicked() {
    saveCanvas('circles', 'png')
}
