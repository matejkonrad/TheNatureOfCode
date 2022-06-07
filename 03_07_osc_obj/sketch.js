function Oscillator() {
  let angle = createVector();
  let velocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
  let amplitude = createVector(random(width / 2), random(height / 2));

  const oscillate = () => {
    angle.add(velocity);
  };

  const display = () => {
    const x = sin(angle.x) * amplitude.x;
    const y = sin(angle.y) * amplitude.y;

    push();
    translate(width / 2, height / 2);
    noStroke();
    fill(175);
    // line(0, 0, x, y);
    ellipse(x, y, 16, 16);
    pop();
  };

  return { display, oscillate };
}
let oscy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  oscy = Oscillator();
  background(0);
}

function draw() {

  oscy.oscillate();
  oscy.display();
}
