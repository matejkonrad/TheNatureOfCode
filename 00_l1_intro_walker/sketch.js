function Walker() {
  let x = width / 2;
  let y = height / 2;

  const display = () => {
    ellipse(x, y, 10, 10);
  };

  const step = () => {
    const r = random(1);

    if (r < 0.4) {
      x++;
    } else if (r < 0.6) {
      x--;
    } else if (r < 0.8) {
      y++;
    } else {
      y--;
    }
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
