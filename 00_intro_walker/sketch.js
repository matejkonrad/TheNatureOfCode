function Walker() {
  let x = width / 2;
  let y = height / 2;

  const display = () => {
    point(x, y);
  };

  const step = () => {
    const randy = parseInt(random(0, 4));

    if (randy === 0) {
      x++;
    } else if (randy === 1) {
      x--;
    } else if (randy === 2) {
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
