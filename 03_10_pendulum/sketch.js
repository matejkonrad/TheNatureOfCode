function Pendulum(_origin, _r) {
  let origin = _origin;
  let location; //= createVector(r * sin(angle), r * cos(angle));
  let r = _r;
  let angle = PI / 4;
  let aVelocity = 0.0;
  let aAcceleration = 0.0;
  let damping = 0.999;

  const display = () => {
    location = createVector(r * sin(angle), r * cos(angle));
    location.add(origin);
    stroke('#f1f1f1');
		strokeWeight(8)
    line(origin.x, origin.y, location.x, location.y);
    fill(0);
		// noFill()
    ellipse(location.x, location.y, 150, 150);
  };

  const update = () => {
    const gravity = 0.4;
    aAcceleration = ((-1 * gravity) / r) * sin(angle);
    aVelocity += aAcceleration;
    angle += aVelocity;
    aVelocity *= damping;
  };

  const go = () => {
    update();
    display();
  };

  return { update, go, display };
}

let pipi;
function setup() {
  createCanvas(900, 900)
  pipi = Pendulum(createVector(width / 2, 10), height / 3 * 2);
  background(0);
}

function draw() {
  background(0,8);
  pipi.go();
}