import { Component, OnInit } from '@angular/core';
import { Move } from 'src/app/interfaces/notations';

const MOVESET: Move[] = [
  'R',
  'L',
  'U',
  'D',
  'F',
  'B',
  "R'",
  "L'",
  "U'",
  "D'",
  "F'",
  "B'",
  'R2',
  'L2',
  'U2',
  'D2',
  'F2',
  'B2',
];

@Component({
  selector: 'app-scramble',
  templateUrl: './scramble.component.html',
  styleUrls: ['./scramble.component.scss'],
})
export class ScrambleComponent implements OnInit {
  availableMoves: Move[] = [];
  stateSequence: Move[] = [];
  stateMoves: number = 4;
  lastMove: Move | null = null;
  nextMoveCounter: number = 0;

  constructor() {
    this.availableMoves = MOVESET.slice();
    // console.log(this.availableMoves);
  }

  ngOnInit() {
    this.stateMoves = Math.floor(Math.random() * 20) + 4;
    this.generateState(this.stateMoves);
  }

  generateState(numOfSequence: number) {
    for (let i = 0; i < numOfSequence; i++) {
      if (this.nextMoveCounter > 1) {
        let moves = MOVESET.filter(
          (move) =>
            move.charAt(0) ===
            this.stateSequence[this.nextMoveCounter - 2].charAt(0)
        );
        // console.log('Last moves', moves);
        moves.forEach((move) => {
          this.availableMoves.push(move);
        });
        // console.log('Added last moves', this.availableMoves);
      }

      // Select a random move and remove from list of available moves to remove redundant moves
      let randomMoveIndex = Math.floor(
        Math.random() * this.availableMoves.length
      );
      let randomMove = this.availableMoves[randomMoveIndex];
      this.stateSequence.push(randomMove);
      this.availableMoves = this.availableMoves.filter(
        (move) => move.charAt(0) !== randomMove.charAt(0)
      );
      // console.log('Removed all of ', randomMove.charAt(0));
      this.nextMoveCounter++;
      // console.log(this.nextMoveCounter, this.availableMoves);
    }
  }
}
