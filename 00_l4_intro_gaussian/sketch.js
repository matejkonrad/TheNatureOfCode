function setup() {
  createCanvas(900, 900);
  frameRate(30);
  // put setup code here
}

function draw() {
  background(0);
  // put drawing code here
  translate(width / 2, 0);

  stroke('#f1f1f1');

  for (let y = 0; y < height; y++) {
    let x = randomGaussian(40, 30);
    line(50, y, x, y);
  }
}
