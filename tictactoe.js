const Player = (name, marker, status) => {
    return {
        name, 
        marker,
        status
    }
}

// Player.prototype.info = function() {
//     return(`${this.name} with ${this.marker}`);
// }

const player1 = Player("Player 1", "X", "loser");
const player2 = Player("Player 2", "O", "loser");
const players = [player1, player2];

const gameBoard = (() => {
    const winner_box = document.querySelector("#winner-box");
    const winner_announcement = document.querySelector("#winner-announcement"); 
    const showWinner = () => {
        winner_box.style.display = "block";
        if (winner_announcement.innerHTML.length > 3) {
            winner_announcement.style.fontSize = `${480 / winner_announcement.innerHTML.length}px`;
        } else {
            winner_announcement.style.fontSize = "40px";
        }
    };
    const hideWinner = () => {
        winner_box.style.display = "none";
    };
    hideWinner();
    let game_on;
    let array_change = [["012"], ["345"], ["678"], ["036"], ["147"], ["258"], ["048"], ["246"]];
    let clickCount = 0;
    const makeClickable = () => {
        const x_array = "XXX";
        const o_array = "OOO";
        // const boardArray = [];
        // const arraytop = ["0", "3", "6"];
        // let allarrays = [];
        // let array012 = [square[0].id, square[1].id, square[2].id];
        // let array345 = [square[3].id, square[4].id, square[5].id];
        game_on = true;
        for (let i = 0; i < square.length; i++) {
            square[i].addEventListener("click", () => {
                if (square[i].innerHTML == "" && game_on == true) {
                    if (clickCount % 2 == 0) {
                        square[i].innerHTML = player1.marker;
                    } else {
                        square[i].innerHTML = player2.marker;
                    }
                    clickCount += 1;
                    // Push square id and either X or O to boardArray
                    // boardArray.push({[square[i].id] : square[i].innerHTML});
                    for (const element in array_change) {
                        // Replace winning combos with X or O
                        array_change[element][0] = array_change[element][0].replace(square[i].id, square[i].innerHTML);
                        if (array_change[element][0] == x_array) {
                            player1.status = "winner";
                            game_on = false;
                            break;
                        } else if (array_change[element][0] == o_array) {
                            player2.status = "winner";
                            game_on = false;
                            break;
                        } else {
                            continue;
                        }
                    }
                    if (game_on == false) {
                        for (const element in players) {
                            if (players[element].status == "winner") {
                                winner_announcement.innerHTML = `${players[element].name} wins`;
                                showWinner();
                            }
                        }
                    }
                }
                //console.log(array_change)
                // if (clickCount >= 5) {
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
                    
                // }
                if (clickCount == 9 && game_on == true) {
                    winner_announcement.innerHTML = "Tie";
                    showWinner();
                }
            });
        }
    };
    const restartGame = () => {
        hideWinner();
        winner_announcement.innerHTML = "";
        game_on = true;
        clickCount = 0;
        array_change = [["012"], ["345"], ["678"], ["036"], ["147"], ["258"], ["048"], ["246"]];
        for (let i = 0; i < square.length; i++) {
            square[i].innerHTML = "";
        }
        for (const element in players) {
            if (players[element].status == "winner") {
                players[element].status == "loser"
            }
        }
    };
    return {makeClickable, restartGame, showWinner, hideWinner};
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

const gameController = (() => {
    const newPlayer1 = document.querySelector("#input-player1");
    const newPlayer1input = document.querySelector("#new-player1-name");
    const newPlayer2 = document.querySelector("#input-player2");
    const newPlayer2input = document.querySelector("#new-player2-name");
    const player1name = document.querySelector("#player1name");
    const player2name = document.querySelector("#player2name");

    const hideInput1 = () => {
        newPlayer1.style.display = "none";
    };
    const hideInput2 = () => {
        newPlayer2.style.display = "none";
    };
    const player1btn = document.querySelector("#player1btn");
    player1btn.addEventListener("click", () => {
        newPlayer1.style.display = "block";
    });
    const player2btn = document.querySelector("#player2btn");
    player2btn.addEventListener("click", () => {
        newPlayer2.style.display = "block";
    });
    const saveName1 = document.querySelector("#save-player1");
    saveName1.addEventListener("click", () => {
        player1.name = newPlayer1input.value;
        player1name.innerHTML = player1.name;
        hideInput1();
    });
    const saveName2 = document.querySelector("#save-player2");
    saveName2.addEventListener("click", () => {
        player2.name = newPlayer2input.value;
        player2name.innerHTML = player2.name;
        hideInput2();
    });
    const exitName1 = document.querySelector("#exit-player1");
    exitName1.addEventListener("click", hideInput1);
    const exitName2 = document.querySelector("#exit-player2");
    exitName2.addEventListener("click", hideInput2);
    hideInput1();
    hideInput2();
    player1name.innerHTML = player1.name;
    player2name.innerHTML = player2.name;
    return {hideInput1, hideInput2};
})();


const gameContainer = document.querySelector("#game-container");
const square = document.getElementsByClassName("square");
const restart = document.querySelector("#restart");
restart.addEventListener("click", gameBoard.restartGame);
const playerSection = document.querySelector("#player-section");
const playerPerson = document.getElementsByClassName("player-person");


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