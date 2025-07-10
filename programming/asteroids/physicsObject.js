class PhysicsObject {
  // All of these will be vectors
  position;
  velocity;
  acceleration;

  constructor(initialPosition) {
    this.position = initialPosition;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }
}
