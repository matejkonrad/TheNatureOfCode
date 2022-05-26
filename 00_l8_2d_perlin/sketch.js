function setup() {
  createCanvas(900, 900);
  // put setup code here
}

function draw() {
  background(0);
  let xoff = 0.0;
  noiseDetail(2, 0.25);

  for (let x = 0; x < width; x++) {
    let yoff = 0.0;
    for (let y = 0; y < height; y++) {
      const bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      stroke(bright);
      point(x, y);
      yoff += 0.1;
    }
    xoff += 0.1;
  }
}
