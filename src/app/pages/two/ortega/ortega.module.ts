import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrtegaPageRoutingModule } from './ortega-routing.module';

import { OrtegaPage } from './ortega.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrtegaPageRoutingModule,
    SharedModule
  ],
  declarations: [OrtegaPage]
})
export class OrtegaPageModule {}
