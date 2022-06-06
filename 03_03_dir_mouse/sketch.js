let mover = [];
function Mover(_loc, _vel, _acc) {
  let location = _loc;
  let velocity = _vel;
  let acceleration = _acc;
  // let acceleration = p5.Vector.random2D();
  const topSpeed = 10;

  const update = () => {
    const mouse = createVector(mouseX, mouseY);
    const direction = p5.Vector.sub(mouse, location);

    direction.normalize();
    direction.mult(0.5);

    acceleration = direction;

    velocity.add(acceleration);
    velocity.limit(topSpeed);
    location.add(velocity);
    acceleration.mult(5.5);
  };
  const display = () => {
    const angle = velocity.heading();

    rectMode(CENTER);

    stroke(0);
    fill('#f1f1f1');
    push();
    translate(location.x, location.y);
    rotate(angle);
    rect(0, 0, 30, 30);
    pop();
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
  createCanvas(900, 900);

  for (let i = 0; i < 20; i++) {
    mover.push(
      Mover(
        createVector(random(width), random(height)),
        createVector(random(-2, 2), random(-2, 2)),
        createVector(-0.001, 0.01)
      )
    );
  }

  background(0);
}

function draw() {
  mover.forEach((mov) => {
    mov.update();
    mov.checkEdges();
    mov.display();
  });
}
