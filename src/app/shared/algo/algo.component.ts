import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Algo } from 'src/app/interfaces/algos';
import { AlgoModalComponent } from '../algo-modal/algo-modal.component';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss'],
})
export class AlgoComponent implements OnInit {
  @Input() algo: Algo | undefined;
  sequences: string[][] = [];
  simulationUrls: string[] = [];

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    if (this.algo) {
      // Split the sequences into arrays of strings to display multiple lines
      for (const sequence of this.algo.sequences) {
        this.sequences.push(sequence.split('\n'));
      }

      // Set the simulation URLs
      if (this.algo.simulationUrls)
        this.simulationUrls = this.algo.simulationUrls;
    }
  }

  async openModal(
    algoName: string | undefined,
    sequence: string[],
    setupAlgo: string[] | undefined
  ) {
    const modal = await this.modalController.create({
      component: AlgoModalComponent,
      componentProps: {
        name: algoName,
        sequence: sequence.join(' '),
        setupAlgo: setupAlgo?.join(' '),
        puzzleType: this.algo?.puzzleType
      },
    });
    modal.present();

    const { data, role } = await modal.onDidDismiss();
  }
}
