let cols = 30;
let rows = 30;
const scl = 20;
let terrain = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {

	const wavey = map(sin(radians(frameCount)), -1, 1, 1, 5)
  // cols = width / scl;
  // rows = height / scl
	noiseDetail(2, wavey)
 let xoff = 0.0;

  for (let y = 0; y < rows; y++) {
    let yoff = 0.0;
    terrain[y] = [];
    for (let x = 0; x < cols; x++) {
      // const noisey = map(noise(xoff, yoff), 0, 1, 0, 1000);
      terrain[y].push(map(noise(xoff, yoff), 0, 1, 0, 200));
      yoff += 0.1;
    }
    xoff += 0.1;
  }
  background(0);
  noFill();
  stroke('red');
  rotateX(radians(20));
  scale(0.5);
  translate(-width / 2, -height / 2);
  noiseDetail(2, 0.25);
  fill(0);
  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      const wave = map(sin(radians(frameCount * (x + y))), 0, 1, 0, 0);
      const mapX = map(x, 0, cols, 0, width);
      const mapY = map(y, 0, rows, 0, height);

      vertex(mapX, mapY, terrain[y][x] + wave);

      const mapY2 = map(y + 1, 0, rows, 0, height);
      if (y + 1 < rows) {
        vertex(mapX, mapY2, terrain[y + 1][x] + wave);
      }
    }

    endShape();
  }
}
