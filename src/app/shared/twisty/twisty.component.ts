import { Component, Input, OnInit } from '@angular/core';
import type { Puzzle } from 'src/app/types/puzzle';

@Component({
  selector: 'app-twisty',
  templateUrl: './twisty.component.html',
  styleUrls: ['./twisty.component.scss'],
})
export class TwistyComponent implements OnInit {
  scriptElement: HTMLScriptElement;
  @Input() sequence: string = "R U R' U R U2' R'";
  @Input() setupAlgo: string = 'x2 y2';
  @Input({ required: true }) puzzleType: Puzzle = null;

  constructor() {
    this.scriptElement = document.createElement('script');
  }

  ngOnInit(): void {
    this.scriptElement.src = 'https://cdn.cubing.net/v0/js/cubing/twisty';
    this.scriptElement.type = 'module';
    document.body.appendChild(this.scriptElement);
  }
}
