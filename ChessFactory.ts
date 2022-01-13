import { Piece } from "./Piece";
import { PieceType } from "./PieceType";

export class ChessFactory
{
    static initBoard(): Map<string, Piece>
    {
        let board: Map<string, Piece> = new Map([

            // White
            [ 'e1', new Piece(PieceType.KING, true)],
            [ 'd1', new Piece(PieceType.QUEEN, true)],
            [ 'c1', new Piece(PieceType.BISHOP, true)],
            [ 'f1', new Piece(PieceType.BISHOP, true)],
            [ 'b1', new Piece(PieceType.KNIGHT, true)],
            [ 'g1', new Piece(PieceType.KNIGHT, true)],
            [ 'a1', new Piece(PieceType.ROOK, true)],
            [ 'h1', new Piece(PieceType.ROOK, true)],

            [ 'a2', new Piece(PieceType.PAWN, true)],
            [ 'b2', new Piece(PieceType.PAWN, true)],
            [ 'c2', new Piece(PieceType.PAWN, true)],
            [ 'd2', new Piece(PieceType.PAWN, true)],
            [ 'e2', new Piece(PieceType.PAWN, true)],
            [ 'f2', new Piece(PieceType.PAWN, true)],
            [ 'g2', new Piece(PieceType.PAWN, true)],
            [ 'h2', new Piece(PieceType.PAWN, true)],

            // Black
            [ 'e8', new Piece(PieceType.KING, false)],
            [ 'd8', new Piece(PieceType.QUEEN, false)],
            [ 'c8', new Piece(PieceType.BISHOP, false)],
            [ 'f8', new Piece(PieceType.BISHOP, false)],
            [ 'b8', new Piece(PieceType.KNIGHT, false)],
            [ 'g8', new Piece(PieceType.KNIGHT, false)],
            [ 'a8', new Piece(PieceType.ROOK, false)],
            [ 'h8', new Piece(PieceType.ROOK, false)],

            [ 'a7', new Piece(PieceType.PAWN, false)],
            [ 'b7', new Piece(PieceType.PAWN, false)],
            [ 'c7', new Piece(PieceType.PAWN, false)],
            [ 'd7', new Piece(PieceType.PAWN, false)],
            [ 'e7', new Piece(PieceType.PAWN, false)],
            [ 'f7', new Piece(PieceType.PAWN, false)],
            [ 'g7', new Piece(PieceType.PAWN, false)],
            [ 'h7', new Piece(PieceType.PAWN, false)]
        ]);

        // Empty cells
        let columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        for (let column of columns) {
            for(let i = 3; i <= 6; i++) {
                board.set(column + i, null);
            }
        }   

        return board;
    }
}