import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twisty',
  templateUrl: './twisty.component.html',
  styleUrls: ['./twisty.component.scss'],
})
export class TwistyComponent {
  scriptElement: HTMLScriptElement;
  @Input() sequence: string = "R U R' U R U2' R'";
  @Input() setupAlgo: string = 'x2 y2';
  @Input() puzzleType: '3x3x3' | '2x2x3' = '3x3x3';

  constructor() {
    this.scriptElement = document.createElement('script');
    this.scriptElement.src = 'https://cdn.cubing.net/v0/js/cubing/twisty';
    this.scriptElement.type = 'module';
    document.body.appendChild(this.scriptElement);
  }
}
