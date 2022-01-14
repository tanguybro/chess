import { Piece } from "./piece";

export const PIECES: Piece[] = [
    // White
    { id: 1, type: 'king', color: 'white', position: 'e1' },
    { id: 2, type: 'queen', color: 'white', position: 'd1' },
    { id: 3, type: 'bishop', color: 'white', position: 'c1' },
    { id: 4, type: 'bishop', color: 'white', position: 'f1' },
    { id: 5, type: 'knight', color: 'white', position: 'b1' },
    { id: 6, type: 'knight', color: 'white', position: 'g1' },
    { id: 7, type: 'rook', color: 'white', position: 'a1' },
    { id: 8, type: 'rook', color: 'white', position: 'h1' },

    { id: 9, type: 'pawn', color: 'white', position: 'a2' },
    { id: 10, type: 'pawn', color: 'white', position: 'b2' },
    { id: 11, type: 'pawn', color: 'white', position: 'c2' },
    { id: 12, type: 'pawn', color: 'white', position: 'd2' },
    { id: 13, type: 'pawn', color: 'white', position: 'e2' },
    { id: 14, type: 'pawn', color: 'white', position: 'f2' },
    { id: 15, type: 'pawn', color: 'white', position: 'g2' },
    { id: 16, type: 'pawn', color: 'white', position: 'h2' },

    // Black
    { id: 17, type: 'king', color: 'black', position: 'e8' },
    { id: 18, type: 'queen', color: 'black', position: 'd8' },
    { id: 19, type: 'bishop', color: 'black', position: 'c8' },
    { id: 20, type: 'bishop', color: 'black', position: 'f8' },
    { id: 21, type: 'knight', color: 'black', position: 'b8' },
    { id: 22, type: 'knight', color: 'black', position: 'g8' },
    { id: 23, type: 'rook', color: 'black', position: 'a8' },
    { id: 24, type: 'rook', color: 'black', position: 'h8' },

    { id: 25, type: 'pawn', color: 'black', position: 'a7' },
    { id: 26, type: 'pawn', color: 'black', position: 'b7' },
    { id: 27, type: 'pawn', color: 'black', position: 'c7' },
    { id: 28, type: 'pawn', color: 'black', position: 'd7' },
    { id: 29, type: 'pawn', color: 'black', position: 'e7' },
    { id: 30, type: 'pawn', color: 'black', position: 'f7' },
    { id: 31, type: 'pawn', color: 'black', position: 'g7' },
    { id: 32, type: 'pawn', color: 'black', position: 'h7' }
];
