import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Move } from 'src/app/interfaces/notations';
import { ThreeCubeModel } from 'src/app/interfaces/cube-model';

@Component({
  selector: 'app-cube-model',
  templateUrl: './cube-model.component.html',
  styleUrls: ['./cube-model.component.scss'],
})
export class CubeModelComponent implements AfterViewInit {
  @Input() scramble: Move[] = [];
  @ViewChild('cubeCanvas') cubeCanvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  cube!: ThreeCubeModel;
  sideSize = 45;
  pieceSize = this.sideSize / 3;
  canvasSize: { width: number; height: number } = {
    width: this.sideSize * 4 + 15,
    height: this.sideSize * 3 + 10,
  };

  constructor() {}

  ngAfterViewInit(): void {
    this.cubeCanvas.nativeElement.width = this.canvasSize.width;
    this.cubeCanvas.nativeElement.height = this.canvasSize.height;
    // this.cubeCanvas.nativeElement.style.border = '3px solid black';
    const context = this.cubeCanvas.nativeElement.getContext('2d');

    if (context) {
      this.ctx = context;
    } else {
      throw new Error('Failed to get 2D context');
    }
  }

  initialize(scramble?: Move[]) {
    console.log('Initializing cube');
    this.cube = new ThreeCubeModel(
      this.ctx,
      this.pieceSize,
      this.sideSize,
      this.canvasSize
    );
    if (scramble) this.cube.scramble(this.scramble);
    this.cube.draw();
    this.ctx.save();
  }

  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.cubeCanvas.nativeElement.width,
      this.cubeCanvas.nativeElement.height
    );
  }
}
