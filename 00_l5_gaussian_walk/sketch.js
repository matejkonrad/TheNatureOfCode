function Walker() {
  let x = width / 2;
  let y = height / 2;

  const display = () => {
    ellipse(x, y, 10, 10);
  };

  const step = () => {
		const sd = 10;
		const mean = 0;
		const rX = randomGaussian(mean, sd);
		const rY = randomGaussian(mean, sd);
    
		x += rX;	
		y += rY
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
