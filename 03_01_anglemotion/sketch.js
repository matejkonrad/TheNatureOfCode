function Mover(_loc, _vel, _acc, _mass) {
  let location = _loc;
  let velocity = _vel;
  let acceleration = _acc;
  const mass = _mass;

  let angle = 0;
  let aVelocity = 0;
  let aAcceleration = 0;

  const update = () => {
    velocity.add(acceleration);
    location.add(velocity);
    aAcceleration = acceleration.x / 10;
    aVelocity += aAcceleration;
    aVelocity = constrain(aVelocity, -0.1, 0.1);
    angle += aVelocity;
    acceleration.mult(0);
  };

  const applyForce = (force) => {
    const f = force.copy();
    f.div(mass);
    acceleration.add(f);
  };

  const display = () => {
    fill(200);
    noStroke();
		rectMode(CENTER);
    push();
    translate(location.x, location.y);
    rotate(angle);
    rect(0, 0, mass * 16, mass * 16);
    pop();
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

  return { update, display, checkEdges, applyForce, mass, velocity, location };
}

function Attractor() {
  const mass = 20;
  const location = createVector(width / 2, height / 2);
  const G = 0.4;

  const display = () => {
    stroke(0);
    fill(176, 200);
    ellipse(location.x, location.y, mass * 2, mass * 2);
  };

  const attract = (mover) => {
    const force = p5.Vector.sub(location, mover.location);

    const distance = constrain(force.mag(), 5, 25);

    const m = (G * mover.mass * mass) / (distance * distance);

    force.normalize();
    force.mult(m);

    return force;
  };

  return { display, attract };
}

let mover;
let movers = [];
let attractor;

function setup() {
  createCanvas(900, 900);

  for (let i = 0; i < 100; i++) {
    movers.push(
      Mover(
        createVector(random(width), random(height)),
        createVector(0, 0),
        createVector(0, 0),
        random(0, 2)
      )
    );
  }

  attractor = Attractor();
}

function draw() {
  // attractor.display();
  background(0);
  movers.forEach((mov) => {
    const attraction = attractor.attract(mov);

    mov.applyForce(attraction);
    mov.checkEdges();
    mov.update();
    mov.display();
  });
}
