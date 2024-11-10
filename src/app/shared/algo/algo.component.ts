import { Component, Input, OnInit } from '@angular/core';
import { Algo } from 'src/app/interfaces/algos';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss'],
})
export class AlgoComponent implements OnInit {
  @Input() algo: Algo | undefined;
  sequences: string[][] = [];
  simulationUrls: string[] = [];

  constructor() {}

  ngOnInit() {
    if (this.algo) {
      // Split the sequences into arrays of strings to display multiple lines
      for (const sequence of this.algo.sequences) {
        this.sequences.push(sequence.split('\n'));
      }

      // Set the simulation URLs
      this.simulationUrls = this.algo.simulationUrls;
    }

  }
}
