import Gameboard from "./Gameboard";

class PlayerType {
  attacks = [];
  surroundingAttacks = [];
  prevAttack = [];
  prevAttackHit = false;
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.generateAllAttacks();
  }
  receiveAttack(x, y) {
    const hit = this.gameboard.receiveAttack(x, y);
    if (hit) {
      return true;
      //   this.gameboard.checkForAllShipsSunk();
    }
    return false;
  }

  generateAllAttacks() {
    const tempArr = [];
    for (let x = 0; x < this.gameboard.width; x++) {
      for (let y = 0; y < this.gameboard.width; y++) {
        tempArr.push([y, x]);
      }
    }
    this.shuffle(tempArr);
    this.attacks = tempArr;
  }

  shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  generateAttack() {
    let newAttack = null;

    if (this.prevAttackHit) {
      let newAttacks = this.generateValidAttacks();
      console.log(newAttacks);
      //   console.log(this.attacks);
      this.surroundingAttacks = [...this.surroundingAttacks, ...newAttacks];
      console.log(this.surroundingAttacks);

      if (this.surroundingAttacks.length !== 0) {
        newAttack = this.surroundingAttacks.pop();
        for (let i = 0; i < this.attacks.length; i++) {
          if (
            newAttack[0] === this.attacks[i][0] &&
            newAttack[1] === this.attacks[i][1]
          ) {
            this.attacks.splice(i, 1);
          }
        }
        return newAttack;
      }
    } else if (this.surroundingAttacks.length !== 0) {
      newAttack = this.surroundingAttacks.pop();
      return newAttack;
    }

    return this.attacks.pop();
  }

  generateValidAttacks() {
    let [y, x] = this.prevAttack;
    console.log(y, x);
    const newAttacks = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const tempArr = newAttacks
      .map(([my, mx]) => {
        return [my + y, mx + x];
      })
      .filter(([fy, fx]) => {
        return (
          fy >= 0 &&
          fy < this.gameboard.width &&
          fx >= 0 &&
          fx < this.gameboard.width
        );
      })
      .filter(([fy, fx]) => {
        console.log("In the filter: " + fy, fx);
        console.log(this.gameboard.board[fy][fx].display);
        return (
          this.gameboard.board[fy][fx].display === "O" ||
          this.gameboard.board[fy][fx].display === "B"
        );
      });
    console.log(tempArr);
    return tempArr;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}

export default PlayerType;
