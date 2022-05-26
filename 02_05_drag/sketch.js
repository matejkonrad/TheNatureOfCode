function Liquid(_x, _y, _w, _h, _c) {
  let x = _x;
  let y = _y;
  let w = _w;
  let h = _h;
  let c = _c;

  const display = () => {
    noStroke();
    fill(30);
    rect(x, y, w, h);
  };

  return { display, x, y, w, h, c };
}

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
    ellipse(location.x, location.y, mass * 16, mass * 16);
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

  const drag = (l) => {
    const speed = velocity.mag();
    const dragMag = l.c * speed * speed;

    const drag = velocity.copy();
    drag.mult(-1);
    drag.normalize();

    drag.mult(dragMag);

    applyForce(drag);
  };

  const isInside = (l) => {
    if (
      location.x > l.x &&
      location.x < l.x + l.w &&
      location.y > l.y &&
      location.y < l.y + l.h
    ) {
      return true;
    }

    return false;
  };

  return {
    update,
    display,
    checkEdges,
    applyForce,
    mass,
    velocity,
    isInside,
    drag,
  };
}

function getFriction(velocity) {
  const c = 0.01;
  const normal = 1;
  const frictionMag = c * normal;

  const friction = velocity.copy();
  friction.mult(-1);
  friction.normalize();

  friction.mult(frictionMag);
  return friction;
}

let movers = [];
let liquid;

function setup() {
  createCanvas(900, 900);
  liquid = Liquid(0, height / 2, width, height / 2, 0.1);

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
}

function draw() {
  background(0);
  const wind = createVector(0.001, 0);

  liquid.display();
  movers.forEach((mov) => {
    if (mov.isInside(liquid)) {
      mov.drag(liquid);
    }

    const gravity = createVector(0, 0.1 * mov.mass);
    const friction = getFriction(mov.velocity);
    mov.applyForce(friction);
    mov.applyForce(gravity);
    mov.applyForce(wind);
    mov.checkEdges();
    mov.update();
    mov.display();
  });
}
