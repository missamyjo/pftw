//https://www.seekingoutside.com/using-generative-art-to-inform-hard-edge-abstract-paintings-with-p5-js-code-snippet/ 
//orderly hard edge iteration tool
//use for pixel paintings and triangle paintings
var colors = [
    ["#FF0000"],
    ["#00CCC0"],
    ["#cae00d"],
    ["#808000"],
    ["#103778"],
    ["#FF1DCE"],
    ["#FFB30D"],
    ["#008000"],
    ["#080808"],
];
var tw = 235;
var th = 235;
function setup() {
    createCanvas(700, 700);
    noLoop();
}
function draw() {

    //   strokeWeight(1);
    noStroke();
    for (var x = 0; x < width; x += tw) {
        for (var y = 0; y < height; y += th) {

            /* logic for squares - pixel images */
            //drawSquare(x, y, tw, th);
            /* logic for two triangles per box */
            let rando = random();
            console.log(rando);
            drawSquare(x, y, tw, th);
        }
    }
}
function drawSquare(x, y, w, h) {
    if (random() < 0.8) {
        fill(colors[parseInt(random() * colors.length)]);
        rect(x, y, w, h);
    } else {
        fill(100);
        rect(x, y, w, h);
    }
}
//for splitting squares into two trianges
function drawTriangles(x, y, dir) {
    //dir > .5 draws line ul to lr
    //dir < .5 draws line lr to ur

    //define triangle points
    let ulx = x;
    let uly = y;
    let llx = x;
    let lly = y + th;
    let urx = x + tw;
    let ury = y;
    let lrx = x + tw;
    let lry = y + th;

    //draw triangles by dir
    if (dir > .5) {
        fill(getColor());
        triangle(ulx, uly, llx, lly, urx, ury);
        fill(getColor());
        triangle(llx, lly, urx, ury, lrx, lry);
    } else if (dir <= .5) {
        fill(getColor());
        triangle(ulx, uly, llx, lly, lrx, lry);
        fill(getColor());
        triangle(ulx, uly, urx, ury, lrx, lry);
    }
}
function getColor() {
    // grab a fil color
    let col;

    if (random() < 0.8) {
        col = colors[parseInt(random(colors.length))];
    } else {
        col = "2F847c";
    }
    stroke(col);
    return col;
}