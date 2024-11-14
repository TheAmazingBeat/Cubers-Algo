import { Injectable } from '@angular/core';
import { Move } from '../interfaces/notations';
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

@Injectable({
  providedIn: 'root',
})
export class ScrambleGeneratorService {
  availableMoves: Move[] = [];
  stateSequence: Move[] = [];
  stateMoves: number = 4;
  lastMove: Move | null = null;
  nextMoveCounter: number = 0;
  scramble: Move[] = [];

  cube: Cube;

  constructor() {
    this.availableMoves = MOVESET.slice();
    this.stateMoves = Math.floor(Math.random() * 20) + 10;
    this.generateState(this.stateMoves);
    // console.log(this.stateSequence);

    this.cube = new Cube();
    Cube.initSolver();
    // console.log(this.cube.solve(this.stateSequence.join(' ')));
  }

  getScramble() {
    return this.stateSequence;
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
