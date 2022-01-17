function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0,255,255);
  } else {
    fill(255,0,255);
  }
  rect(mouseX, mouseY, 80, 80);
}
