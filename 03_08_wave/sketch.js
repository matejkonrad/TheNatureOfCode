let angle = 0;
const startAngle = 0;
const angleVel = 0.02;
const amplitude = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke('#f1f1f1');
  strokeWeight(2);
  noFill();

	angle = startAngle

  beginShape();
  for (let i = 0; i < width; i++) {
    const y = map(sin(angle), -1, 1, 0, height);
    vertex(i, y);
    angle += angleVel;
  }
  endShape();
}
