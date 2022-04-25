// adaptation tutorial Colorful Coding - Simple sine wave animation in p5.js | Coding Project #11 https://www.youtube.com/watch?v=ktPnruyC6cc

function setup() {
    createCanvas(windowWidth, windowHeight)

    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    background(10, 20, 30)
    noFill()
    translate(width / 2, height / 2)

    // for every loop, the width and height should be decreased use the 'i' var to control that
    for (var i = 0; i < 200; i++) {
        push()
        // use sin function to rotate makes the squares spin back and forth
        // rotate by 'frameCount + i' to get each square a different offset
        // the value you multiply with represents a number of degrees
        // if it is 100, the squares will spin between -100 and 100 degrees
        // try experimenting with the offset 
        rotate(sin(frameCount + i * 1.5) * 200)

        // add some color 
        // can also use the sin and cos functions for this 
        var r = map(sin(frameCount), -1, 1, 50, 255)
        var g = map(cos(frameCount / 3), -1, 1, 50, 255)
        var b = map(sin(frameCount / 2), -1, 1, 50, 255)

        stroke(r, g, b)

        rect(0, 0, 600 - i * 3, 800 - i * 3, 240 - i)

        pop()
    }

}