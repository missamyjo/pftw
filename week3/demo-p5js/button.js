let heading;
let button;
let input;
let message = 'type something to change me';
// using the DOM library for
function sayMessage() {
    message = input.value();
    input.value('');
}
function setup() {
    createCanvas(800, 600);
    background('lightblue');
    heading = createElement('h2', ['Howdy']);
    heading.position(100, 200);
    button = createButton('alert message');
    button.size(150, 16);
    button.postition(100, 275);
    button.mousePressed(sayMessage);
    input = createInput('');
    input.position(100, 250);
}
function draw() {
    background('lightblue');
    textSize(28);
    fill('purple');
    text('Ken is super cool', 100, 400);
}