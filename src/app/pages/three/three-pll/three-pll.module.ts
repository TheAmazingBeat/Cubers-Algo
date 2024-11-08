import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreePllPageRoutingModule } from './three-pll-routing.module';

import { ThreePllPage } from './three-pll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreePllPageRoutingModule
  ],
  declarations: [ThreePllPage]
})
export class ThreePllPageModule {}
