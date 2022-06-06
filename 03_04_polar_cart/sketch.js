let r = 20;
let theta = 10;

function setup() {
  createCanvas(1080, 1350);
  background(0);
}


function addBorders() {
	fill(0);

	const size = 50;

	rect(0, 0, width, size);
	rect(width - size, 0, size, height);
	rect(0, height - size, width, size);
	rect(0, 0, size, height);

}

function draw() {
  noStroke();
  fill('#f1f1f1');

	let x = r * cos(theta);
	let y = r * sin(theta);

	fill('#E7ECEF')
  ellipse(x + width / 4, y + height / 3, 16, 16);
	fill('#0F7173')
  ellipse(x + width / 2, y + height / 3 * 2, 16, 16);
	fill('#F05D5E')
  ellipse(x + width / 4 *3, y + height / 3 , 16, 16);

	addBorders()

  theta += 0.05;
	r+=0.2;
}
