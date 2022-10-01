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
    const makeClickable = () => {
        let clickCount = 0;
        const x_array = "XXX";
        const o_array = "OOO";
        const boardArray = [];
        const arraytop = ["0", "3", "6"];
        let allarrays = [];
        let array012 = [square[0].id, square[1].id, square[2].id];
        let array345 = [square[3].id, square[4].id, square[5].id];
        let array_change = [["012"], ["345"], ["678"], ["036"], ["147"], ["258"], ["048"], ["246"]];
        let game_on = true;
        // Winning combos
        // function winningCombos() {
        //     console.log("hihi")
        //     let array012 = [boardArray[0], boardArray[1], boardArray[2]];
        //     let array345 = [boardArray[3], boardArray[4], boardArray[5]];
        //     let array678 = [boardArray[6], boardArray[7], boardArray[8]];
        //     let array036 = [boardArray[0], boardArray[3], boardArray[6]];
        //     let array147 = [boardArray[1], boardArray[4], boardArray[7]];
        //     let array258 = [boardArray[2], boardArray[5], boardArray[8]];
        //     let array048 = [boardArray[0], boardArray[4], boardArray[8]];
        //     let array246 = [boardArray[2], boardArray[4], boardArray[6]];
        //     let allarrays = [array012, array345, array678, array036, array147, array258, array048, array246]
        // };
        for (let i = 0; i < square.length; i++) {
            square[i].addEventListener("click", () => {
                if (square[i].innerHTML == "") {
                    if (clickCount % 2 == 0) {
                        square[i].innerHTML = "X";
                    } else {
                        square[i].innerHTML = "O";
                    }
                    clickCount += 1;
                    // Push square id and either X or O to boardArray
                    boardArray.push({[square[i].id] : square[i].innerHTML});
                    for (const element in array_change) {
                        // Replace winning combos with X or O
                        array_change[element][0] = array_change[element][0].replace(square[i].id, square[i].innerHTML);
                        if (array_change[element][0] == x_array) {
                            console.log("X wins!");
                            game_on = false;
                            break;
                        } else if (array_change[element][0] == o_array) {
                            console.log("O wins!")
                            game_on = false;
                            break;
                        } else {
                            continue;
                        }
                    }
                    if (game_on == false) {
                        console.log("game over");
                    }
                }
                //console.log(array_change)
                if (clickCount >= 5) {
                    // console.log(Object.values(boardArray))
                    // console.log(Object.entries(boardArray))
                    // console.log(boardArray["0"]["1"])
                    // console.log(boardArray[0][1])
                    // console.log(boardArray[0]["2"])
                    // console.log(square[i].id)
                    // if (allarrays.includes(x_array) == true || allarrays.includes(o_array) == true) {
                    //     console.log("win")
                    // }

                    // for (const element in Object.values(boardArray)) {
                    //     if (square[i].id in arraytop) {
                    //         // console.log(boardArray[element])
                    //         // console.log(boardArray[element][1])
                    //     }
                    // }
                    
                }
                if (clickCount == 9 && game_on == true) {
                    console.log("tie")
                }
            });
        }
    };
    return {makeClickable};
})();

// const gamePlay = (() => {
//     const endGame = () => {

//     };
//     // const endGame = () => {
//     //     if (gameBoard.clickCount == 9) {
//     //         console.log("game over")
//     //     }
//     // };
//     // return {endGame};
// })();


const gameContainer = document.querySelector("#game-container");
const square = document.getElementsByClassName("square");

gameBoard.makeClickable();
// gamePlay.endGame();

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