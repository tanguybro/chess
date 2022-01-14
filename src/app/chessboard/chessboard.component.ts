import { Component, OnInit } from '@angular/core';
import { Piece } from '../piece';
import { PIECES } from '../pieces';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

  pieces = PIECES;
  selectedPiece?: Piece;
  boardSize?: number;
  cellSize?: number;

  constructor() { 

  }

  ngOnInit(): void {
    this.boardSize = $('#chessboard').width();
    if(this.boardSize != null) {
      this.cellSize =  this.boardSize / 8;
    }
  }

  ngAfterViewInit(): void {
    // Init pieces position
    var boardPosition = $('#chessboard').offset();
    alert(boardPosition?.top)
    for(let piece of this.pieces) {
      $('#' + piece.id).css({"position": "absolute", "top": boardPosition?.top + "px", "left": boardPosition?.left + "px"});
    }
  }

  onSelect(piece: Piece): void {
    this.selectedPiece = piece;
    $('#' + piece.id).css({"position": "absolute", "top": "20px"});
  }
}
