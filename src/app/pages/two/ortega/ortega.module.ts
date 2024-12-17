import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrtegaPageRoutingModule } from './ortega-routing.module';

import { OrtegaPage } from './ortega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrtegaPageRoutingModule
  ],
  declarations: [OrtegaPage]
})
export class OrtegaPageModule {}
