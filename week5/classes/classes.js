let bubble1;
let bubble2;
let bubble3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bubble1 = new Bubble(200, 200, 40);
    bubble2 = new Bubble(400, 200, 20);
    bubble3 = new Bubble(100, 300, 20);
}
function draw() {
    background('purple');
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    move() {
        this.x = this.x + random(1, -1);
        this.y = this.y + random(2, 0);
    }
    show() {
        stroke('lightblue');
        strokeWeight(2);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
}