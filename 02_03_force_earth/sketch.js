let movers = [];

function Mover(_loc, _vel, _acc, _mass) {
  let location = _loc;
  let velocity = _vel;
  let acceleration = _acc;
  const mass = _mass;

  const update = () => {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.mult(0);
  };

  const applyForce = (force) => {
    const f = force.copy();
    f.div(mass);
    acceleration.add(f);
  };

  const display = () => {
    stroke(0);
    fill('#f1f1f1');
    rect(location.x, location.y, mass * 16, mass * 16);
  };

  const checkEdges = () => {
    if (location.x > width) {
      location.x = width;
      velocity.x *= -1;
    } else if (location.x < 0) {
      location.x = 0;
      velocity.x *= -1;
    }

    if (location.y > height) {
      velocity.y *= -1;
      location.y = height;
    } else if (location.y < 0) {
      location.y = 0;
      velocity.y *= -1;
    }
  };

  return { update, display, checkEdges, applyForce, mass };
}

function setup() {
  createCanvas(900, 900);

  for (let i = 0; i < 20; i++) {
    movers.push(
      Mover(
        createVector(random(width), random(height)),
        createVector(0, 0),
        createVector(0, 0),
        random(0, 10)
      )
    );
  }

  background(0);
}

function draw() {
  const wind = createVector(0.009, 0);
  movers.forEach((mov) => {
    const gravity = createVector(0, 0.01 * mov.mass);
    mov.applyForce(gravity);
    mov.applyForce(wind);
    mov.checkEdges();
    mov.update();
    mov.display();
  });
}
