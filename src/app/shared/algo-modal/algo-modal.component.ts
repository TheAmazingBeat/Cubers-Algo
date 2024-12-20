import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-algo-modal',
  templateUrl: './algo-modal.component.html',
  styleUrls: ['./algo-modal.component.scss'],
})
export class AlgoModalComponent {
  name = '';
  sequence = '';
  setupAlgo = '';
  puzzleType: '3x3x3' | '2x2x2' = '3x3x3';

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }
}
