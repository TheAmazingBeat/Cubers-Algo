import { Injectable } from '@angular/core';
import { Move } from '../interfaces/notations';
import { randomScrambleForEvent } from 'cubing/scramble';

// const MOVESET: Move[] = [
//   'R',
//   'L',
//   'U',
//   'D',
//   'F',
//   'B',
//   "R'",
//   "L'",
//   "U'",
//   "D'",
//   "F'",
//   "B'",
//   'R2',
//   'L2',
//   'U2',
//   'D2',
//   'F2',
//   'B2',
// ];

@Injectable({
  providedIn: 'root',
})
export class ScrambleGeneratorService {
  private scramble: Move[] = [];
  /**
   * Old method to generate scramble for the cube
   */
  // availableMoves: Move[] = [];
  // stateSequence: Move[] = [];
  // stateMoves: number = 4;
  // lastMove: Move | null = null;
  // nextMoveCounter: number = 0;

  constructor() {
    /**
     * Old method to generate scramble for the cube
     */
    // this.availableMoves = MOVESET.slice();
    // this.stateMoves = Math.floor(Math.random() * 20) + 4;
    // this.generateState(this.stateMoves);
  }

  /**
   * Uses cubing.js to generate a random scramble for the 3x3 cube
   * @returns an array of Moves suggesting the scramble for the cube
   */
  async generateScramble() {
    this.scramble = [];
    const newScramble = await randomScrambleForEvent('333');

    newScramble
      .toString()
      .split(' ')
      .forEach((move) => {
        this.scramble.push(move as Move);
      });

    return this.scramble;
  }

  /**
   * Returns the scramble generated for the cube
   */
  getScramble() {
    return this.scramble;
  }

  /**
   * This was the original method to generate a scramble for the cube
   * which was by generating a random state and using a cube solver and invert the solve
   * to get the fair scramble
   * @param numOfSequence the number of moves to generate for the scramble
   */
  // generateState(numOfSequence: number) {
  //   for (let i = 0; i < numOfSequence; i++) {
  //     if (this.nextMoveCounter > 1) {
  //       let moves = MOVESET.filter(
  //         (move) =>
  //           move.charAt(0) ===
  //           this.stateSequence[this.nextMoveCounter - 2].charAt(0)
  //       );
  //       moves.forEach((move) => {
  //         this.availableMoves.push(move);
  //       });
  //     }

  //     // Select a random move and remove from list of available moves to remove redundant moves
  //     let randomMoveIndex = Math.floor(
  //       Math.random() * this.availableMoves.length
  //     );
  //     let randomMove = this.availableMoves[randomMoveIndex];
  //     this.stateSequence.push(randomMove);
  //     this.availableMoves = this.availableMoves.filter(
  //       (move) => move.charAt(0) !== randomMove.charAt(0)
  //     );
  //     this.nextMoveCounter++;
  //   }
  // }
}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./scramble.worker', import.meta.url));
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }
