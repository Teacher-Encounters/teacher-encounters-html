( s ) => {
  let position

  s.setup = () => {
    s.createCanvas(400, 400);

    // You can make up your own values for this
    position = s.createVector(200, 200);
  };

  s.draw = () => {
    s.background(220);

    s.circle(position.x, position.y, 50);
  };
};
