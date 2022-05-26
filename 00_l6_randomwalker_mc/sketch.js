function monteCarlo(start, stop) {
	while(true) {
		const r1 = random(start, stop);	
		const probability = r1;
		const r2 = random(start, stop); 
		if (r2 < probability) {
			return r1;	
		}
	}
}

function Walker() {
  let x = width / 2;
  let y = height / 2;

  const display = () => {
    ellipse(x, y, 10, 10);
  };

  const step = () => {
		const stepSize = monteCarlo(0, 10);

		x += random(-stepSize, stepSize)
		y += random(-stepSize, stepSize)
  };

  return {
    display,
    step,
  };
}
let walker;

function setup() {
  createCanvas(900, 900);
  background(0);
  walker = Walker();
}

function draw() {
  fill('#f1f1f1');
  stroke('#f1f1f1');

  walker.display();
  walker.step();
}
