( s ) => {
  s.setup = () => {
    s.createCanvas(400, 400);
  };

  s.draw = () => {
    s.background(220);
    s.circle(200, 200, 50);
  };
};
