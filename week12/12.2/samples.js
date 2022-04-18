// The Coding Train 17.1: Loading and Playing - p5.js Sound Tutorial https://www.youtube.com/watch?v=Pn1g1wjxl_0&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=1
// The Coding Train 17.2: Play and Pause Button - p5.js Sound Tutorial
// The Coding Train 17.4: Amplitude Analysis - p5.js Sound Tutorial
// The Coding Train 8.5: Interacting with the DOM using Sliders, Buttons and Text Inputs - p5.js Tutorial
var song
var slider
// var sliderRate
// var sliderPan
var button

function preload() {

}

function setup() {
    createCanvas(1000, 1000);
    song = loadSound('GetEvil.mp3', loaded);
    amp = new p5.Amplitude();
    slider = createSlider(0, 1, .5, 0.1)
    slider.position(420, 950);
    // //speed - range is 0-3 1 defualt rate half would be 0.5 double would be 2  
    // sliderRate = createSlider(0, 3, 1, 0.01);
    // //left to right speaker - range is -1 and 1 
    // sliderPan = createSlider(-1, 1, 0, 0.01);
    button = createButton("play");
    button.mouseClicked(togglePlaying);
    button.size(60, 24);
    button.position(40, 955);
    background(0);
}

function loaded() {
    console.log('loaded');

}

function draw() {
    background(0);
    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.3, 10, 400);
    fill(255, 204, 0);
    noStroke();
    ellipse(width / 2, height / 2, diam, diam);
    noFill();
    stroke(255, 204, 0);
    ellipse(width / 3, height / 2, diam, diam);
    noFill();
    stroke(255, 204, 0);
    ellipse(width / 1.5, height / 2, diam, diam);
    song.setVolume(slider.value());
    // song.pan(sliderPan.value());
    // song.rate(sliderRate.value())
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.loop();
        button.html("pause");
    } else {
        //if change to stop and it will stop and restart
        //pause will start when it  left off
        song.pause();
        button.html("play");
    }
}