import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Move } from 'src/app/interfaces/notations';
import { ScrambleGeneratorService } from 'src/app/shared/scramble-generator.service';

@Component({
  selector: 'app-scramble',
  templateUrl: './scramble.component.html',
  styleUrls: ['./scramble.component.scss'],
})
export class ScrambleComponent implements OnInit {
  scramble: Move[] = ['R', 'U', "R'", "U'"];
  // isInitialized: boolean = false;
  // cube: Cube;
  // constructor() {
  //   this.availableMoves = MOVESET.slice();
  //   this.cube = new Cube();
  // }
  // ngOnInit() {
  //   this.stateMoves = Math.floor(Math.random() * 20) + 10;
  //   this.generateState(this.stateMoves);
  // }
  // getScramble() {
  //   console.log(this.scramble);
  //   return this.scramble;
  // }

  constructor(private scrambleGenerator: ScrambleGeneratorService) {}

  ngOnInit(): void {
    this.scramble = this.scrambleGenerator.getScramble();
  }
}
