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
  sideSize = 90;
  pieceSize = this.sideSize / 3;
  canvasSize: { width: number; height: number } = {
    width: this.sideSize * 4,
    height: this.sideSize * 3,
  };

  constructor() {}

  ngAfterViewInit(): void {
    this.cubeCanvas.nativeElement.width = this.canvasSize.width;
    this.cubeCanvas.nativeElement.height = this.canvasSize.height;
    this.cubeCanvas.nativeElement.style.border = '3px solid black';
    const context = this.cubeCanvas.nativeElement.getContext('2d');

    if (context) {
      this.ctx = context;
    } else {
      throw new Error('Failed to get 2D context');
    }
    this.initialize();
    this.cube = new ThreeCubeModel(
      this.ctx,
      this.pieceSize,
      this.sideSize,
      this.canvasSize
    );
    this.cube.draw();
  }

  initialize() {
    this.ctx.fillStyle = 'green';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(
      this.sideSize,
      this.sideSize,
      this.sideSize,
      this.sideSize
    );

    this.ctx.fillStyle = 'white';

    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(
      this.sideSize,
      this.sideSize * 0,
      this.sideSize,
      this.sideSize
    );

    this.ctx.fillStyle = 'orange';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(
      this.sideSize * 0,
      this.sideSize,
      this.sideSize,
      this.sideSize
    );

    this.ctx.fillStyle = 'yellow';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(
      this.sideSize,
      this.sideSize * 2,
      this.sideSize,
      this.sideSize
    );

    this.ctx.fillStyle = 'red';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(
      this.sideSize * 2,
      this.sideSize,
      this.sideSize,
      this.sideSize
    );

    this.ctx.fillStyle = 'blue';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(
      this.sideSize * 3,
      this.sideSize,
      this.sideSize,
      this.sideSize
    );

    // this.drawCenters();
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
