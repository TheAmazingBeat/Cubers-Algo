import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ScrambleComponent } from './scramble-display/scramble-display.component';
import { Move } from '../interfaces/notations';
import { CubeModelComponent } from '../shared/cube-model/cube-model.component';
import { ScrambleGeneratorService } from '../services/scramble-generator.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, AfterViewInit {
  scramble: Move[] = [];
  @ViewChild(CubeModelComponent) cubeModel!: CubeModelComponent;

  constructor(private scrambleGenerator: ScrambleGeneratorService) {}

  async ngOnInit() {
    console.log('Generating scramble');
    this.scramble = await this.scrambleGenerator.generateScramble();
  }

  ngAfterViewInit() {
    this.cubeModel.giveScramble(this.scramble);
  }
}
