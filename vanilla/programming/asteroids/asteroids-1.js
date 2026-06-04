class PhysicsEntity {
  // All of these will be vectors
  position;

  // Call this function to create an instance
  constructor(initialPosition) {
    this.position = initialPosition;
  }

  // This will be called every frame to update internal state
  update() {
  }

  // Called every frame to draw itself, the sketch is passed in provide a drawing context
  draw(s) {
    s.circle(this.position.x, this.position.y, 10);
  }
}

// This function declares the p5 Sketch itself
( s ) => {
  // Declare the variables here
  let entities;

  s.setup = () => {
    s.createCanvas(400, 400);
    
    // Create a couple of instances
    const planet = new PhysicsEntity(s.createVector(200, 200))
    const moon = new PhysicsEntity(s.createVector(170, 230));

    // Initialise the list of entities here
    entities = [];

    entities.push(planet);
    entities.push(moon);
  };

  s.draw = () => {
    s.background(220);

    entities.forEach(p => p.update());
    entities.forEach(p => p.draw(s));
  };
};
