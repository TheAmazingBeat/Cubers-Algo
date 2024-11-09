import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotationsPageRoutingModule } from './notations-routing.module';

import { NotationsPage } from './notations.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotationsPageRoutingModule,
    SharedModule,
  ],
  declarations: [NotationsPage],
})
export class NotationsPageModule {}
