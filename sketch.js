var song;

function preload(){
  song = loadSound("");
}

function setup() {
  createCanvas(400, 400);
  song.play();
}

function draw() {
  background(220);
}