let ballLocation;
let velocity;

function setup() {
  createCanvas(900, 900);

  ballLocation = createVector(100, 100);
  velocity = createVector(2.5, 5);
}

function draw() {
  background(0);

  ballLocation.add(velocity);
  if (ballLocation.x > width || ballLocation.x < 0) {
    velocity.x = velocity.x * -1;
  }
  if (ballLocation.y > height || ballLocation.y < 0) {
    velocity.y = velocity.y * -1;
  }

  stroke(0);
  fill('#f1f1f1');
  ellipse(ballLocation.x, ballLocation.y, 30, 30);
}
