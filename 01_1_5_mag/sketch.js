function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
}

function draw() {
  background(0);

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);
  mouse.sub(center);

  let m = mouse.mag();
  fill('#f1f1f1');
  stroke('#f1f1f1');
  rect(0, 0, m, 10);

  translate(width / 2, height / 2);
  line(9, 0, mouse.x, mouse.y);
}
