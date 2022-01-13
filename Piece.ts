import {PieceType} from './PieceType';

export class Piece
{
    private type: PieceType;
    private isWhite: boolean;

    constructor(type: PieceType, isWhite: boolean)
    {
        this.type = type;
        this.isWhite = isWhite;
    }

    toString()
    {
        if(this.isWhite) {
            return this.type;
        }

        return this.type;
    }
}