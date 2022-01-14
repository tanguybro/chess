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

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSelect(piece: Piece): void {
    this.selectedPiece = piece;
  }
}
