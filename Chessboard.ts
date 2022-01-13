import { Piece } from "./Piece";
import { ChessFactory } from "./ChessFactory";

export class Chessboard
{
    private board: Map<string, Piece>;
    private isWhiteTurn: boolean;

    constructor()
    {
        this.board = ChessFactory.initBoard();
        this.isWhiteTurn = true;
    }

    toString()
    {
        let boardStr: string = '';
        let columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        for(let row = 8; row >= 1; row--) {
            for (let column of columns) {
                let piece = this.board.get(column + row);
                if(piece == null) {
                    boardStr += '\u2005\u25A1'
                }
                else {
                    boardStr += piece.toString() + ' ';
                }
            }
            
            boardStr += '\n';
        }

        return boardStr;
    }

    move(position: string, newPosition: string)
    {
        let piece: Piece = this.board.get(position);
        this.board.set(position, null);
        this.board.set(newPosition, piece);

        this.isWhiteTurn = !this.isWhiteTurn; // Si les blancs ont joué, c'est au tour des noirs et vice versa
    }

    endGame(): boolean
    {
        return false;
    }
}