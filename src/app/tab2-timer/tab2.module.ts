import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TimerComponent } from './timer/timer.component';
import { ScrambleComponent } from './scramble/scramble.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    SharedModule,
  ],
  declarations: [Tab2Page, TimerComponent, ScrambleComponent],
})
export class Tab2PageModule {}
