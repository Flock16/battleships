const Ship = require("../modules/Ship");

test("Creates a new ship with specified length", () => {
  const ship = new Ship(2);
  expect(ship.length).toBe(2);
});

test("Hit method should add 1 to the ships timesHit property", () => {
  const ship = new Ship(2);
  const hits = ship.timesHit;
  ship.hit();
  expect(ship.timesHit).toBe(hits + 1);
});

test("Should return false if timesHit < length of the ship", () => {
  const ship = new Ship(2);
  expect(ship.isSunk()).toBe(false);
});

test("Ship should be sunk if timesHit >= length of the ship", () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
