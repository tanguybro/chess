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
  boardSize?: number = 0;
  cellSize: number = 0;
  cells_x = new Map<string, number>();
  cells_y = new Map<string, number>();

  constructor() { 

  }

  ngOnInit(): void {
    this.boardSize = $('#chessboard').width();
    if(this.boardSize == null) {
      this.boardSize = 0;
    }
    this.cellSize =  this.boardSize / 8;
    this.initCellsPosition();
  }

  ngAfterViewInit(): void {
    // Init pieces position
    for(let piece of this.pieces) {
      $('#' + piece.id).css({"position": "absolute", "top": this.cells_y.get(piece.position) + "px", "left": this.cells_x.get(piece.position) + "px"});
    }
  }

  onSelect(piece: Piece): void {
    this.selectedPiece = piece;
    $('.piece').removeClass('border border-primary')
    $('#' + piece.id).addClass('border border-primary')
    //$('#' + piece.id).css({"position": "absolute", "top": "20px"});
  }

  onClick(): void {
    $('.piece').removeClass('border border-primary')
  }

  initCellsPosition(): void {
    let columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    if(this.boardSize == null) return;
    
    for(let row = 1; row <= 8; row++) {
        for (let column of columns) {
            let x = this.boardSize + this.cellSize * (column.charCodeAt(0) - 97) - 10;
            let y = this.cellSize * (row + 1) - 10;
            this.cells_x.set(column + row, x);
            this.cells_y.set(column + row, y);
      }
    }
  }
}
