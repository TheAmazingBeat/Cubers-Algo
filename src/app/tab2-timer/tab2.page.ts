import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrambleComponent } from './scramble/scramble.component';
import { Move } from '../interfaces/notations';
import { CubeModelComponent } from '../shared/cube-model/cube-model.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements AfterViewInit {
  @ViewChild('scrambleText') scrambleText!: ScrambleComponent;
  @ViewChild('scrambleDisplay') cubeModel!: CubeModelComponent;

  scrambleSequence: Move[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.scrambleSequence = this.scrambleText.stateSequence;
    this.cubeModel.scramble = this.scrambleSequence;
    this.cubeModel.initialize(this.scrambleSequence);
  }
}
