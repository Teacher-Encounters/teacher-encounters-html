const s = ( s ) => {
  s.setup = () => {
    s.createCanvas(400, 400);
  };

  s.draw = () => {
    s.background(220);
    s.circle(200, 200, 50);
  };
};

let p5Circle = new p5(s, document.getElementById('p5-circle'));
