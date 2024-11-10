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

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }
}
