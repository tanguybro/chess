"use strict";
exports.__esModule = true;
exports.ChessFactory = void 0;
var Piece_1 = require("./Piece");
var PieceType_1 = require("./PieceType");
var ChessFactory = /** @class */ (function () {
    function ChessFactory() {
    }
    ChessFactory.initBoard = function () {
        var board = new Map([
            // White
            ['e1', new Piece_1.Piece(PieceType_1.PieceType.KING, true)],
            ['d1', new Piece_1.Piece(PieceType_1.PieceType.QUEEN, true)],
            ['c1', new Piece_1.Piece(PieceType_1.PieceType.BISHOP, true)],
            ['f1', new Piece_1.Piece(PieceType_1.PieceType.BISHOP, true)],
            ['b1', new Piece_1.Piece(PieceType_1.PieceType.KNIGHT, true)],
            ['g1', new Piece_1.Piece(PieceType_1.PieceType.KNIGHT, true)],
            ['a1', new Piece_1.Piece(PieceType_1.PieceType.ROOK, true)],
            ['h1', new Piece_1.Piece(PieceType_1.PieceType.ROOK, true)],
            ['a2', new Piece_1.Piece(PieceType_1.PieceType.PAWN, true)],
            ['b2', new Piece_1.Piece(PieceType_1.PieceType.PAWN, true)],
            ['c2', new Piece_1.Piece(PieceType_1.PieceType.PAWN, true)],
            ['d2', new Piece_1.Piece(PieceType_1.PieceType.PAWN, true)],
            ['e2', new Piece_1.Piece(PieceType_1.PieceType.PAWN, true)],
            ['f2', new Piece_1.Piece(PieceType_1.PieceType.PAWN, true)],
            ['g2', new Piece_1.Piece(PieceType_1.PieceType.PAWN, true)],
            ['h2', new Piece_1.Piece(PieceType_1.PieceType.PAWN, true)],
            // Black
            ['e8', new Piece_1.Piece(PieceType_1.PieceType.KING, false)],
            ['d8', new Piece_1.Piece(PieceType_1.PieceType.QUEEN, false)],
            ['c8', new Piece_1.Piece(PieceType_1.PieceType.BISHOP, false)],
            ['f8', new Piece_1.Piece(PieceType_1.PieceType.BISHOP, false)],
            ['b8', new Piece_1.Piece(PieceType_1.PieceType.KNIGHT, false)],
            ['g8', new Piece_1.Piece(PieceType_1.PieceType.KNIGHT, false)],
            ['a8', new Piece_1.Piece(PieceType_1.PieceType.ROOK, false)],
            ['h8', new Piece_1.Piece(PieceType_1.PieceType.ROOK, false)],
            ['a7', new Piece_1.Piece(PieceType_1.PieceType.PAWN, false)],
            ['b7', new Piece_1.Piece(PieceType_1.PieceType.PAWN, false)],
            ['c7', new Piece_1.Piece(PieceType_1.PieceType.PAWN, false)],
            ['d7', new Piece_1.Piece(PieceType_1.PieceType.PAWN, false)],
            ['e7', new Piece_1.Piece(PieceType_1.PieceType.PAWN, false)],
            ['f7', new Piece_1.Piece(PieceType_1.PieceType.PAWN, false)],
            ['g7', new Piece_1.Piece(PieceType_1.PieceType.PAWN, false)],
            ['h7', new Piece_1.Piece(PieceType_1.PieceType.PAWN, false)]
        ]);
        // Empty cells
        var columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            for (var i = 3; i <= 6; i++) {
                board.set(column + i, null);
            }
        }
        return board;
    };
    return ChessFactory;
}());
exports.ChessFactory = ChessFactory;
