"use strict";
exports.__esModule = true;
exports.Piece = void 0;
var Piece = /** @class */ (function () {
    function Piece(type, isWhite) {
        this.type = type;
        this.isWhite = isWhite;
    }
    Piece.prototype.toString = function () {
        if (this.isWhite) {
            return this.type;
        }
        return this.type;
    };
    return Piece;
}());
exports.Piece = Piece;
