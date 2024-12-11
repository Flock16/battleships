class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  hit() {
    this.timesHit += 1;
  }

  isSunk() {
    return this.timesHit >= this.length ? true : false;
  }
}

module.exports = Ship;
