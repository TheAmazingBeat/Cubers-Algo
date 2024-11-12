import { Component, OnInit } from '@angular/core';
import { Move } from 'src/app/interfaces/notations';
// @ts-ignore
import * as Cube from 'cubejs';

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
  scramble: Move[] = [];

  cube: Cube;

  constructor() {
    this.availableMoves = MOVESET.slice();
    this.cube = new Cube();
  }

  ngOnInit() {
    Cube.initSolver();

    this.stateMoves = Math.floor(Math.random() * 20) + 10;
    this.generateState(this.stateMoves);
    const stateString = this.stateSequence.join(' ');

    // use cubejs to generate scramble
    this.cube.move(stateString);
    const solution = this.cube.solve();
    this.scramble = Cube.inverse(solution).split(' ');
  }

  generateState(numOfSequence: number) {
    for (let i = 0; i < numOfSequence; i++) {
      if (this.nextMoveCounter > 1) {
        let moves = MOVESET.filter(
          (move) =>
            move.charAt(0) ===
            this.stateSequence[this.nextMoveCounter - 2].charAt(0)
        );
        moves.forEach((move) => {
          this.availableMoves.push(move);
        });
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
      this.nextMoveCounter++;
    }
  }
}
