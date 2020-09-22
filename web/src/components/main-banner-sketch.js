// Last Revised: 2020.09.22

export const sketch = (p) => {
  let canvas;
  let width;
  let height;

  // p5 variables
  let position;
  let velocity;
  let radius = 4;
  let angle = 0;
  let aVel = 0;
  let aAccel = 0.005;

  // update canvas size when resized
  const updateSize = () => {
    width = document.getElementById("wrap").clientWidth;
    height = document.getElementById("wrap").clientHeight;
    console.log("updated size to" + width);
  };
  window.onload = updateSize;
  window.onresize = updateSize;

  p.setup = () => {
    updateSize();
    let canvas = p.createCanvas(width, height);
    position = p.createVector(p.random(width), p.random(height));
    velocity = p.createVector(1.5, 2.4);
  };

  p.draw = () => {
    p.resizeCanvas(width, height);
    p.background(0);

    // update

    angle += aVel;
    aVel += aAccel;

    position.add(velocity);

    if (position.x > width || position.x < 0) {
      velocity.x = velocity.x * -1;
      aAccel = aAccel * -1;
      aVel = 0;
    }

    if (position.y > height || position.y < 0) {
      velocity.y = velocity.y * -1;
      aAccel = aAccel * -1;
      aVel = 0;
    }

    // draw
    p.stroke(255);
    p.fill(255);
    p.ellipse(position.x, position.y, radius, radius);

    p.push();
    p.translate(position.x, position.y);
    p.rotate(angle);
    for (let i = 1; i < 48; i++) {
      p.ellipse(2 * radius * p.sin(p.PI * i * 0.25), 2 * radius * p.cos(p.PI * i * 0.25), 0.8);
    }
    for (let i = 1; i < 24; i++) {
      p.ellipse(4 * radius * p.sin(p.PI * i * 0.25), 4 * radius * p.cos(p.PI * i * 0.25), 0.4);
    }
    for (let i = 1; i < 12; i++) {
      p.ellipse(4 * radius * p.sin(p.PI * i * 0.5), 4 * radius * p.cos(p.PI * i * 0.25), 0.1);
    }
    p.pop();

    // // draw rings
    // p.noFill();
    // p.strokeWeight(0.25);
    // p.ellipse(position.x, position.y, 4 * radius, 4 * radius * p.sin(p.frameCount / 100));
    // p.ellipse(position.x, position.y, 4 * radius, 4 * radius * p.cos(4 + p.frameCount / 100) * 2);
    // p.ellipse(
    //   position.x,
    //   position.y,
    //   radius * p.cos(2 + p.frameCount / 100) * 4,
    //   radius * p.sin(p.frameCount / 100) * 1.2
    // );
  };
};
