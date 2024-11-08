import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreeOllPageRoutingModule } from './three-oll-routing.module';

import { ThreeOllPage } from './three-oll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreeOllPageRoutingModule
  ],
  declarations: [ThreeOllPage]
})
export class ThreeOllPageModule {}
