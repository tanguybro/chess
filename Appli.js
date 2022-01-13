"use strict";
exports.__esModule = true;
var Chessboard_1 = require("./Chessboard");
var prompt = require('prompt-sync')({ sigint: true });
var chessboard = new Chessboard_1.Chessboard();
console.log(chessboard.toString());
while (!chessboard.endGame()) {
    var pieceToMove = prompt('Quelle pièce voulez-vous bouger (Indiquez la case) ?');
    var newPosition = prompt('Où voulez-vous mettre cette pièce (Indiquez la case) ?');
    try {
        chessboard.move(pieceToMove, newPosition);
        console.log('\n-----------------\n');
        console.log(chessboard.toString());
    }
    catch (e) {
        console.log('Mouvement invalide');
    }
}
