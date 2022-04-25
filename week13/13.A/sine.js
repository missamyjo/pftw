// adaptation tutorial Colorful Coding - Sine wave structures in p5.js | Coding Project #1

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(30)

    rotateX(70)

    noFill()
    stroke(255)

    for (var i = 0; i < 70; i++) {

        var r = map(sin(frameCount / 1), -1, 1, 0, 0)
        var g = map(i, 0, 50, 50, 100)
        var b = map(cos(frameCount), -1, 1, 200, 100)

        stroke(r, g, b)

        rotate(frameCount / 110)


        beginShape()
        for (var j = 0; j < 360; j += 50) {
            var rad = i * 13
            var x = rad * cos(j)
            var y = rad * sin(j)
            var z = sin(frameCount * 3 + i * 3) * 120

            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
}