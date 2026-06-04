class PhysicsEntity {
  // All of these will be vectors
  position;
  velocity;
  acceleration;

  // Call this function to create an instance
  constructor(initialPosition) {
    this.position = initialPosition;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  // This will be called every frame to update internal state
  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  }

  // This will be called for each other physics object
  // that this instance interacts with
  applyForce(force) {
    this.acceleration.add(force);
  }
}
