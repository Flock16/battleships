import PlayerType from "./PlayerType";

class Interface {
  constructor() {
    this.p1 = new PlayerType("Player");
    this.computer = new PlayerType("Computer");
    this.gameOver = false;
    this.winnerBanner = null;
    this.boardWidth = this.p1.gameboard.width;
    this.boardHeight = this.p1.gameboard.height;
    // Div that contains both gameboards
    this.gameBoardsDiv = null;

    // Selectors
    this.gameboarder = document.querySelector("body > div > div");

    this.createBoardDisplay();
  }

  createBoardDisplay() {
    this.gameboarder.textContent = "";
    this.createBoardHeaders();

    const boardsDiv = document.createElement("div");
    boardsDiv.classList.add("boardsDiv");
    boardsDiv.append(this.createGameboardDisplay(this.p1));
    boardsDiv.append(this.createGameboardDisplay(this.computer));

    this.gameboarder.append(boardsDiv);

    this.createResetButton();
    this.createWinningBanner();
    this.gameBoardsDiv = boardsDiv;
  }

  createBoardHeaders() {
    const gameHeader = document.createElement("h1");
    gameHeader.textContent = "Battleship";
    this.gameboarder.append(gameHeader);

    const headersDiv = document.createElement("div");
    headersDiv.classList.add("gameboardHeaders");

    const p1BoardHeader = document.createElement("h2");
    p1BoardHeader.textContent = this.p1.name + "s Board";
    const computerBoardHeader = document.createElement("h2");
    computerBoardHeader.textContent = this.computer.name + "s Board";

    headersDiv.append(p1BoardHeader);
    headersDiv.append(computerBoardHeader);
    this.gameboarder.append(headersDiv);
  }

  createGameboardDisplay(playerType) {
    const gameboardDiv = document.createElement("div");
    gameboardDiv.classList.add("gameboard");

    // Loop through the playerTypes board to create rows for gameboard
    for (let i = 0; i < this.boardHeight; i++) {
      const gameboardRow = document.createElement("div");
      gameboardRow.classList.add("gameboardRow");
      gameboardDiv.append(gameboardRow);

      // Loop through the playerTypes board to create cells to be added to the row for gameboard
      for (let j = 0; j < this.boardWidth; j++) {
        // Check if the cell is occupied by a players ship and update it's display to equal 'B'
        if (playerType.name !== "Computer") {
          this.markPlayersShipLocations(playerType, i, j);
        }
        const gameboardCell = document.createElement("div");
        gameboardCell.textContent = playerType.gameboard.board[i][j].display;
        if (playerType.name === "Computer") {
          this.createComputersGameboardCell(playerType, gameboardCell, i, j);
        }
        this.updateCellColor(
          gameboardCell,
          playerType.gameboard.board[i][j].display
        );
        gameboardCell.classList.add("gameboardCell");
        gameboardRow.append(gameboardCell);
      }
    }
    return gameboardDiv;
  }

  markPlayersShipLocations(playerType, i, j) {
    if (
      playerType.gameboard.board[i][j].display !== "H" &&
      playerType.gameboard.board[i][j].display !== "S" &&
      playerType.gameboard.board[i][j].ship !== null
    ) {
      playerType.gameboard.board[i][j].display = "B";
      //   if (playerType.gameboard.board[i][j].ship !== null) {
      //     playerType.gameboard.board[i][j].display = "B";
      //   }
    }
  }

  createComputersGameboardCell(playerType, gameboardCell, i, j) {
    gameboardCell.classList.add("gameboardCellComputer");

    if (
      playerType.gameboard.board[i][j].display === "O" ||
      playerType.gameboard.board[i][j].display === "T"
    ) {
      if (!this.gameOver) {
        gameboardCell.addEventListener("click", () => {
          this.playGame(playerType, i, j);
        });
      }
    }
  }

  createResetButton() {
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", () => {
      this.p1 = new PlayerType("Player");
      this.computer = new PlayerType("Computer");
      this.gameOver = false;
      this.winnerBanner.textContent = "";
      this.updateBoardDisplay();
    });
    this.gameboarder.append(resetButton);
  }

  createWinningBanner() {
    const gameWinnerBanner = document.createElement("h2");
    gameWinnerBanner.classList.add("winnerBanner");
    this.gameboarder.append(gameWinnerBanner);
    this.winnerBanner = gameWinnerBanner;
  }

  updateCellColor(gameboardCell, cellDisplay) {
    if (cellDisplay === "O" || cellDisplay === "T") {
      gameboardCell.classList.add("noInteraction");
    } else if (cellDisplay === "B") {
      gameboardCell.classList.add("playerBattleship");
    } else if (cellDisplay === "H") {
      gameboardCell.classList.remove("noInteraction");
      gameboardCell.classList.remove("playerBattleship");
      gameboardCell.classList.add("hit");
    } else if (cellDisplay === "S") {
      gameboardCell.classList.remove("noInteraction");
      gameboardCell.classList.remove("playerBattleship");
      gameboardCell.classList.remove("hit");
      gameboardCell.classList.add("sunk");
    }
  }

  playGame(playerType, i, j) {
    playerType.gameboard.receiveAttack(i, j);
    let winner = this.checkForWinner();

    if (!winner) {
      let [y, x] = this.p1.generateAttack();
      let hit = this.p1.receiveAttack(y, x);
      if (hit) {
        this.p1.prevAttackHit = true;
      } else {
        this.p1.prevAttackHit = false;
      }
      this.p1.prevAttack = [y, x];
    }
    winner = this.checkForWinner();

    if (winner === "p1") {
      this.winnerBanner.textContent = "Player Wins";
      this.gameOver = true;
      const winnerHeader = document.createElement("h2");
      winnerHeader.textContent = "Player Wins";
    } else if (winner === "computer") {
      this.winnerBanner.textContent = "Computer Wins";
      this.gameOver = true;
    }
    this.updateBoardDisplay();
  }

  updateBoardDisplay() {
    this.gameBoardsDiv.textContent = "";
    this.gameBoardsDiv.append(this.createGameboardDisplay(this.p1));
    this.gameBoardsDiv.append(this.createGameboardDisplay(this.computer));
  }

  checkForWinner() {
    if (this.p1.gameboard.checkForAllShipsSunk()) {
      return "computer";
    } else if (this.computer.gameboard.checkForAllShipsSunk()) {
      return "p1";
    }
    return null;
  }
}

export default Interface;
