import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreePllPageRoutingModule } from './three-pll-routing.module';

import { ThreePllPage } from './three-pll.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreePllPageRoutingModule,
    SharedModule
  ],
  declarations: [ThreePllPage]
})
export class ThreePllPageModule {}
