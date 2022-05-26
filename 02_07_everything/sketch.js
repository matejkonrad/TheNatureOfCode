function Mover(_loc, _vel, _acc, _mass) {
  let location = _loc;
  let velocity = _vel;
  let acceleration = _acc;
  const mass = _mass;
  const G = 0.4;

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
    // stroke(0);
    noStroke();
    fill(200);
    ellipse(location.x, location.y, mass * 16, mass * 16);
  };

  const checkEdges = () => {
    if (location.x > width) {
      location.x = width;
      velocity.x *= 0;
    } else if (location.x < 2) {
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

  const attract = (mover) => {
    const force = p5.Vector.sub(location, mover.location);

    const distance = constrain(force.mag(), 5, 25);

    const m = (G * mover.mass * mass) / (distance * distance);

    force.normalize();
    force.mult(m);

    return force;
  };

  return {
    update,
    display,
    checkEdges,
    applyForce,
    mass,
    velocity,
    location,
    attract,
  };
}

let mover;
let movers = [];

function setup() {
  createCanvas(900, 900, WEBGL);

  for (let i = 0; i < 50; i++) {
    movers.push(
      Mover(
        createVector(random(width), random(height)),
        createVector(0, 0),
        createVector(0, 0),
        random(0, 2)
      )
    );
  }
}

function draw() {

  background(0);
  translate(-width / 2, -height / 2);

  // attractor.display();
  movers.forEach((mov, idx) => {
    movers.forEach((movAttractor, idx2) => {
      if (idx === idx2) {
        return;
      }
      const attraction = movAttractor.attract(mov);
      mov.applyForce(attraction);
    });

    mov.checkEdges();
    mov.update();
    mov.display();
  });
}
