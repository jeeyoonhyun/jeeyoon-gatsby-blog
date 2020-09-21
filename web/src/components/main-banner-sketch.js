// Last Revised: 2020.09.20
// Original Version: 2019.07.31
export const sketch = (p) => {
  let canvas;
  let position;
  let velocity;

  p.setup = () => {
    let canvas = p.createCanvas("50vw", 200);
    position = p.createVector(100, 100);
    velocity = p.createVector(2.5, 5);
    // canvas.style("z-index", "-1");
    canvas.style("width", "50vw");
    canvas.style("margin", "auto");
  };

  p.draw = () => {
    p.background("yellow");
    //   position.add(velocity);

    //   if (position.x > p.width || position.x < 0) {
    //     velocity.x = velocity.x * -1;
    //   }

    //   if (position.y > p.height || position.y < 0) {
    //     velocity.y = velocity.y * -1;
    //   }

    //   p.stroke(0);
    //   p.fill(0);
    //   p.ellipse(position.x, position.y, 16, 16);
  };
};
