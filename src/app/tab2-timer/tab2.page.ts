import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrambleComponent } from './scramble/scramble.component';
import { Move } from '../interfaces/notations';
import { CubeModelComponent } from '../shared/cube-model/cube-model.component';
import { ScrambleGeneratorService } from '../shared/scramble-generator.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements AfterViewInit {
  @ViewChild('scrambleText') scrambleText!: ScrambleComponent;
  @ViewChild('scrambleDisplay') cubeModel!: CubeModelComponent;

  scramble: Move[] = [];

  constructor(private scrambleGenerator: ScrambleGeneratorService) {}

  ngAfterViewInit(): void {
    // console.log('Initializing tab2');
    // this.scramble = this.scrambleText.getScramble();
    this.scramble = this.scrambleGenerator.getScramble();
    this.cubeModel.initialize(this.scramble);
  }
}
