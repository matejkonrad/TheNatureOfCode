let angle = 0;
const aVelocity = 0.05;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);

  const amplitude = 100;
  const x = amplitude * cos(angle);
  angle += aVelocity;

  ellipseMode(CENTER);
  stroke('#f1f1f1');
  fill(175);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  ellipse(x, 0, 20, 20);
}
