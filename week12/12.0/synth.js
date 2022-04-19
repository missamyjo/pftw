button1x = 200;
button1y = 150;
button2x = 350;
button2y = 150;
button3x = 500;
button3y = 150;
button4x = 650;
button4y = 150;
button5x = 800;
button5y = 150;
button6x = 950;
button6y = 150;
button7x = 1100;
button7y = 150;
button8x = 1250;
button8y = 150;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    sound1 = loadSound("mp3/3ca.wav");
    sound2 = loadSound("mp3/4cb.wav");
    sound3 = loadSound("mp3/5cc.wav");
    sound4 = loadSound("mp3/6cd.wav");
    sound5 = loadSound("mp3/10ca.wav");
    sound6 = loadSound("mp3/11cb.wav");
    sound7 = loadSound("mp3/12cc.wav");
    sound8 = loadSound("mp3/13cd.wav");

    sound = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8];

    soundFormats('wav');

    noStroke()

    button = createButton('1');
    button.size(150, 900);
    button.position(button1x, button1y);
    button.mousePressed(soundswitch1);
    button.style('background-color', 'hotpink');

    button = createButton('2');
    button.size(150, 900);
    button.position(button2x, button2y);
    button.mousePressed(soundswitch2);
    button.style('background-color', 'red');

    button = createButton('3');
    button.size(150, 900);
    button.position(button3x, button3y);
    button.mousePressed(soundswitch3);
    button.style('background-color', 'orange');

    button = createButton('4');
    button.size(150, 900);
    button.position(button4x, button4y);
    button.mousePressed(soundswitch4);
    button.style('background-color', 'yellow');

    button = createButton('5');
    button.size(150, 900);
    button.position(button5x, button5y);
    button.mousePressed(soundswitch5);
    button.style('background-color', 'yellowgreen');

    button = createButton('6');
    button.size(150, 900);
    button.position(button6x, button6y);
    button.mousePressed(soundswitch6);
    button.style('background-color', 'blue');

    button = createButton('7');
    button.size(150, 900);
    button.position(button7x, button7y);
    button.mousePressed(soundswitch7);
    button.style('background-color', "darkblue");

    button = createButton('8');
    button.size(150, 900);
    button.position(button8x, button8y);
    button.mousePressed(soundswitch8);
    button.style('background-color', 'indigo');
}

function loaded() {
    console.log("loaded");
}

function draw() {
    background('black');
}

function keyPressed() {
    if (keyCode === 49) {
        soundswitch1();
        console.log("1 Pressed!")
    }
    else if (keyCode === 50) {
        soundswitch2();
        console.log("2 Pressed!")
    }
    else if (keyCode === 51) {
        soundswitch3();
        console.log("3 Pressed!")
    }
    else if (keyCode === 52) {
        soundswitch4();
        console.log("4 Pressed!")
    }
    else if (keyCode === 53) {
        soundswitch5();
        console.log("5 Pressed!")
    }
    else if (keyCode === 54) {
        soundswitch6();
        console.log("6 Pressed!")
    }
    else if (keyCode === 55) {
        soundswitch7();
        console.log("7 Pressed!")
    }
    else if (keyCode === 56) {
        soundswitch8();
        console.log("8 Pressed!")
    }
}

function soundswitch1() {
    if (!sound[1].isPlaying() || sound[1].isPlaying()) {
        sound[1].play();
        console.log("Sound 1 Played");
    }
    else {
        sound[1].pause();
        console.log("Sound 1 Paused");
    }
}


function soundswitch2() {
    if (!sound[2].isPlaying() || sound[2].isPlaying()) {
        sound[2].play();
        console.log("Sound 2 Played");
    }
    else {
        sound[2].pause();
        console.log("Sound 2 Paused");
    }
}

function soundswitch3() {
    if (!sound[3].isPlaying() || sound[3].isPlaying()) {
        sound[3].play();
        console.log("Sound 3 Played");
    }
    else {
        sound[3].pause();
        console.log("Sound 3 Paused");
    }
}

function soundswitch4() {
    if (!sound[4].isPlaying() || sound[4].isPlaying()) {
        sound[4].play();
        console.log("Sound 4 Played");
    }
    else {
        sound[4].pause();
        console.log("Sound 4 Paused");
    }
}

function soundswitch5() {
    if (!sound[5].isPlaying() || sound[5].isPlaying()) {
        sound[5].play();
        console.log("Sound 5 Played");
    }
    else {
        sound[5].pause();
        console.log("Sound 5 Paused");
    }
}

function soundswitch6() {
    if (!sound[6].isPlaying() || sound[6].isPlaying()) {
        sound[6].play();
        console.log("Sound 6 Played");
    }
    else {
        sound[6].pause();
        console.log("Sound 6 Paused");
    }
}

function soundswitch7() {
    if (!sound[7].isPlaying() || sound[7].isPlaying()) {
        sound[7].play();
        console.log("Sound 7 Played");
    }
    else {
        sound[7].pause();
        console.log("Sound 7 Paused");
    }
}

function soundswitch8() {
    if (!sound8.isPlaying() || sound[8].isPlaying()) {
        sound[8].play();
        console.log("Sound 8 Played");
    }
    else {
        sound[8].pause();
        console.log("Sound 8 Paused");
    }
}




