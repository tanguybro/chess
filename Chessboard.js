"use strict";
exports.__esModule = true;
exports.Chessboard = void 0;
var ChessFactory_1 = require("./ChessFactory");
var Chessboard = /** @class */ (function () {
    function Chessboard() {
        this.board = ChessFactory_1.ChessFactory.initBoard();
        this.isWhiteTurn = true;
    }
    Chessboard.prototype.toString = function () {
        var boardStr = '';
        var columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        for (var row = 8; row >= 1; row--) {
            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                var column = columns_1[_i];
                var piece = this.board.get(column + row);
                if (piece == null) {
                    boardStr += '\u2005\u25A1';
                }
                else {
                    boardStr += piece.toString() + ' ';
                }
            }
            boardStr += '\n';
        }
        return boardStr;
    };
    Chessboard.prototype.move = function (position, newPosition) {
        var piece = this.board.get(position);
        this.board.set(position, null);
        this.board.set(newPosition, piece);
        this.isWhiteTurn = !this.isWhiteTurn; // Si les blancs ont joué, c'est au tour des noirs et vice versa
    };
    Chessboard.prototype.endGame = function () {
        return false;
    };
    return Chessboard;
}());
exports.Chessboard = Chessboard;
