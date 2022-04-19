// Algorithmic Music Composition https://junshern.github.io/algorithmic-music-tutorial/part1.html

var polySynth;
var velocity = 0.4;
var baseNote = 40;
var keyOrder = "12345678";
var keyStates = [0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 255);
    stroke(255);
    strokeWeight(7);
    synth = new p5.PolySynth();
}

function draw() {
    var keyWidth = width / keyStates.length;
    for (var i = 0; i < keyStates.length; i++) {
        var keyColor;
        if (keyStates[i] === 1) {
            keyColor = color('#DE9C10');
        } else {
            keyColor = color('#038C9E');
        }
        fill(keyColor);
        stroke(255);
        rect(i * keyWidth, 0, keyWidth, height);
        fill(255);
        noStroke();
        text(keyOrder[i], i * keyWidth + keyWidth / 2, height / 2);

    }
}

function keyPressed() {
    var keyIndex = keyOrder.indexOf(key);
    if (keyIndex >= 0) {
        keyStates[keyIndex] = 1;
        var midiNoteNumber = baseNote + keyIndex;
        var freq = midiToFreq(midiNoteNumber);
        synth.noteAttack(freq, velocity, 0);
    }
}

function keyReleased() {
    var keyIndex = keyOrder.indexOf(key);
    if (keyIndex >= 0) {
        keyStates[keyIndex] = 0;
        var midiNoteNumber = baseNote + keyIndex;
        var freq = midiToFreq(midiNoteNumber);
        synth.noteRelease(freq, 0);
    }
}

function touchStarted() {
    var keyWidth = width / keyStates.length;
    var keyIndex = floor(mouseX / keyWidth);
    keyStates[keyIndex] = 1;
    var midiNoteNumber = baseNote + keyIndex;
    var freq = midiToFreq(midiNoteNumber);
    synth.noteAttack(freq, velocity, 0);
}

function touchEnded() {
    for (var i = 0; i < keyStates.length; i++) {
        keyStates[i] = 0;
    }
    synth.noteRelease();
}