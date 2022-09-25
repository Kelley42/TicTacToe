const Player = (name, marker) => {
    return {
        name, 
        marker,
    }
}

// Player.prototype.info = function() {
//     return(`${this.name} with ${this.marker}`);
// }

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

const gameBoard = (() => {
    let clickCount = 0;
    const makeClickable = () => {
        for (let i = 0; i < square.length; i++) {
            square[i].addEventListener("click", () => {
                if (square[i].innerHTML == "") {
                    square[i].innerHTML = "X";
                    clickCount += 1;
                }
            });
        }
    };
    return {clickCount, makeClickable};
})();

const gamePlay = (() => {
    const endGame = () => {
        if (gameBoard.clickCount == 9) {
            console.log("game over")
        }
    };
    return {endGame};
})();


const gameContainer = document.querySelector("#game-container");
const square = document.getElementsByClassName("square");

gameBoard.makeClickable()
gamePlay.endGame()

// Gameboard as array inside gameboard object
// Players stored in objects
// Object to control flow of gameplay

// 1 of something - use module (gameBoard, displayController)
// multiples - use factory (players)

// JS function to render gameboard contents

// Functions to allow players to mark spot, can't mark taken spots

//Check for end of game - 3 in a row and tie (no 3 in row but no spaces left)

// Players can input names
// Start/restart game
// Congratulate winner