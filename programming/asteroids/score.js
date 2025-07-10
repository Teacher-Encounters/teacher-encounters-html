class Score {
  score = 0;

  constructor() {
    this.score = 0;
  }

  reset() {
    this.score = 0;
  }

  increment(points) {
    this.score += points;
  }

  // Getters are not strictly required in JavaScript, but a good to be aware of
  getScore() {
    return this.score
  }
}
