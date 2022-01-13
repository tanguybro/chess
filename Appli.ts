import { Chessboard } from "./Chessboard";

const prompt = require('prompt-sync')({sigint: true});

let chessboard = new Chessboard();
console.log(chessboard.toString());

while(!chessboard.endGame()) {
    const pieceToMove = prompt('Quelle pièce voulez-vous bouger (Indiquez la case) ?');
    const newPosition = prompt('Où voulez-vous mettre cette pièce (Indiquez la case) ?');

    try {
        chessboard.move(pieceToMove, newPosition);
        console.log('\n-----------------\n');
        console.log(chessboard.toString());
    }
    catch(e) {
        console.log('Mouvement invalide');
    }
}
