let startAngle = 0;
const angleVel = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke('#f1f1f1');
  strokeWeight(2);
  noFill();
  translate(width /4 , height / 4);

  let angle = startAngle;

  for (let x = 0; x < width / 2; x += 10) {
    console.log(x);
    const y = map(sin(angle * 100), -1, 1, 0, height / 2);
    ellipse(x, y, 48, 48);
    angle += angleVel;
  }
  startAngle += 0.02;
}
