function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.info = function() {
    console.log(this.name, this.marker);
}

const player1 = new Player("player 1", "X");
const player2 = new Player("player 2", "O");

function makeClickable() {
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", () => {
            if (square[i].innerHTML == "") {
                square[i].innerHTML = "X";
            }
        });
        // if (square[i].innerHTML == "") { // If box has not been taken yet
        //     square[i].innerHTML = "X";
        //     square[i].addEventListener("click", changeToFavColor);
        //     break;
        // }
    }
}


const gameBoard = document.querySelector("#game-container");
const square = document.getElementsByClassName("square");
makeClickable();

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