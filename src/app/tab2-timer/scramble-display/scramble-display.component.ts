import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/interfaces/notations';
import { ScrambleGeneratorService } from 'src/app/services/scramble-generator.service';

@Component({
  selector: 'app-scramble',
  templateUrl: './scramble-display.component.html',
  styleUrls: ['./scramble-display.component.scss'],
})
export class ScrambleComponent {
  @Input({ required: true }) scramble: Move[] = ['R', 'U', "R'", "U'"];

  constructor(private scrambleGenerator: ScrambleGeneratorService) {}
}
