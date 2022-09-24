function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.info = function() {
    console.log(this.name, this.marker);
}

const player1 = new Player("player 1", "X");
const player2 = new Player("player 2", "O");