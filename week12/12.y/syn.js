var synth;
var sloop;
var freq = 800;
var velocity = 0.9;
var lastX, lastY;
var numNotes = 46;
var freq;
var activeNote = -1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    colorMode(HSB, 255);
    stroke(255);
    strokeWeight(7);
    synth = new p5.PolySynth();
    lastX = width / 4;
    lastY = height / 4;

    noteWidth = width / 4;
    noteHeight = height / 4;
}

function draw() {
    background(255);

    for (var i = 0; i < numNotes; i++) {
        var pitchClass = i % 12;
        var octave = floor(i / 12);
        var x = pitchClass * noteWidth;
        var y = octave * noteHeight;

        var hue = map(i, 0, numNotes, 0, 255);
        if (i == activeNote) {
            fill(255);
        } else {
            fill(hue, 170, 255);
        }
        stroke(255);
        rect(x, y, noteWidth, noteHeight);
        fill(0);
        noStroke();
        text(i, x + noteWidth / 2, y + noteHeight / 2);
    }
}

function touchStarted() {
    lastX = mouseX;
    lastY = mouseY;
    var pitchClass = floor(mouseX / noteWidth);
    var octave = floor(mouseY / noteHeight);
    var midiNoteNumber = pitchClass + octave * 12;
    activeNote = midiNoteNumber;
    if (midiNoteNumber < 46) {
        freq = midiToFreq(midiNoteNumber);
        // Play synth
        synth.noteAttack(freq, .5, 0);
    }
}

function touchEnded() {
    activeNote = -1;
    // Stop synth
    synth.noteRelease();
}