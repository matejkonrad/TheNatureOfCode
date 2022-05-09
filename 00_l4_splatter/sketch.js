const circles = 100;

function setup() {
	createCanvas(900, 900);
	// put setup code here

	background(0);
}

function draw() {
	translate(mouseX, mouseY);
	fill("#f1f1f1");
	noStroke()

	for (let i = 0; i < circles; i++) {
		const rX = randomGaussian(30, 5);	
		
		const rY = randomGaussian(30, 5);	
		const w = randomGaussian(20, 10);	
		const h = randomGaussian(20, 10);	
  	ellipse(rX, rY, w, h)
	}
}
