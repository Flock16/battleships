import Ship from "./Ship";

class Gameboard {
  width = 8;
  height = 8;
  numberOfShips = 4;
  shipsSunk = 0;
  // X = hit, M = miss, S = Sunk, O = not interacted
  board = [];
  constructor() {
    for (let i = 0; i < this.height; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.width; j++) {
        this.board[i][j] = {
          ship: null,
          display: "O",
        };
      }
    }

    const ships = this.createShips(this.numberOfShips);
    this.placeShips(ships);
  }

  createShips(numberOfShips) {
    const ships = [];
    for (let i = 0; i < numberOfShips; i++) {
      let newShip = new Ship(i + 2);
      ships.push(newShip);
    }
    return ships;
  }

  placeShips(ships) {
    // Might be good for Testing if need to know where ships will be
    // ships.forEach((ship, index) => {
    //   for (let i = 0; i < ship.length; i++) {
    //     this.board[index][i].ship = ship;
    //     this.board[index][i].display = "T";
    //   }
    // });

    // Create random board with ships
    ships.forEach((ship, index) => {
      let x = this.getRandomInt(this.width);
      let y = this.getRandomInt(this.height);
      let direction = this.getRandomInt(2);
      while (true) {
        if (direction === 0) {
          if (x + ship.length > this.width - 1) {
            x = this.getRandomInt(this.width);
            y = this.getRandomInt(this.height);
          } else {
            // Check for Ship already in potential spaces
            let collision = false;
            // Copy of x as we don't want to be changing it in the collision check and mess with the placement after
            let position = x;
            for (let i = 0; i < ship.length; i++) {
              if (this.board[y][position].ship !== null) {
                collision = true;
                x = this.getRandomInt(this.width);
                y = this.getRandomInt(this.height);
              }
              position++;
            }
            if (!collision) {
              for (let i = 0; i < ship.length; i++) {
                this.board[y][x].ship = ship;
                // this.board[y][x].display = `${index + 2}`;
                // this.board[y][x].display = "T";
                // this.board[y][x].display = "O";
                x++;
              }
              break;
            }
          }
        } else if (direction === 1) {
          if (y + ship.length > this.height - 1) {
            x = this.getRandomInt(this.width);
            y = this.getRandomInt(this.height);
          } else {
            // Check for Ship already in potential spaces
            let collision = false;
            let position = y;
            for (let i = 0; i < ship.length; i++) {
              if (this.board[position][x].ship !== null) {
                collision = true;
                x = this.getRandomInt(this.width);
                y = this.getRandomInt(this.height);
              }
              position++;
            }
            if (!collision) {
              for (let i = 0; i < ship.length; i++) {
                this.board[y][x].ship = ship;
                // this.board[y][x].display = `${index + 2}`;
                // this.board[y][x].display = "T";
                this.board[y][x].display = "O";
                y++;
              }
              break;
            }
          }
        }
      }
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  receiveAttack(x, y) {
    if (this.board[x][y].ship === null) {
      this.board[x][y].display = "M";
      return false;
    } else {
      this.board[x][y].display = "H";
      this.board[x][y].ship.hit();
      if (this.board[x][y].ship.isSunk()) {
        this.shipsSunk++;
        this.updateForSunkShips();
        return true;
      }
      return true;
    }
  }

  updateForSunkShips() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.board[i][j].ship !== null) {
          if (this.board[i][j].ship.isSunk()) {
            this.board[i][j].display = "S";
          }
        }
      }
    }
  }

  checkForAllShipsSunk() {
    return this.shipsSunk === this.numberOfShips ? true : false;
  }

  printBoardDisplayHelper() {
    const tempArr = [];
    for (let i = 0; i < this.height; i++) {
      tempArr[i] = [];
      for (let j = 0; j < this.width; j++) {
        tempArr[i][j] = this.board[i][j].display;
      }
    }
    console.log(tempArr);
  }
}

export default Gameboard;
