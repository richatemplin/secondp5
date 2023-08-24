function setup() {
  createCanvas(600, 400);
  background(100, 20, 100);
  stroke(255,100);
}

function draw() {

  // ellipse
  //fill(250, 200, 200);
  //ellipse(mouseX, mouseY, 100, 100);
  
  // rectangle
  fill(200, 250, 200);
  rect(mouseX, mouseY, 50, 50);
}

// try mousePressed function 
function mousePressed() {
  background(100, 20, 100);
}