let mover;
function Mover(_loc, _vel, _acc) {
  let location = _loc;
  let velocity = _vel;
  let acceleration = _acc;
  // let acceleration = p5.vector.random2D();
  const topSpeed = 10;

  const update = () => {
    velocity.add(acceleration);
    velocity.limit(topSpeed);
    location.add(velocity);
  };
  const display = () => {
    stroke(0);
    fill('#f1f1f1');
    ellipse(location.x, location.y, 30, 30);
  };

  const checkEdges = () => {
    if (location.x > width) {
      location.x = 0;
    } else if (location.x < 0) {
      location.x = width;
    }

    if (location.y > height) {
      location.y = 0;
    } else if (location.y < 0) {
      location.y = height;
    }
  };

  return { update, display, checkEdges };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = Mover(
    createVector(random(width), random(height)),
    createVector(random(-2, 2), random(-2, 2)),
    createVector(-0.001, 0.01)
  );
}

function draw() {
  background(0);

  mover.update();
  mover.checkEdges();
  mover.display();
}
