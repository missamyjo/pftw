window.alert("click and drag to blend colors!");
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(22, 167, 175);
}

function draw() {
    if (mouseIsPressed) {
        fill(211, 157, 53);
        blendMode(SOFT_LIGHT);
    } else {
        fill(239, 56, 73);
    }
    ellipse(mouseX, mouseY, 80, 80);
}