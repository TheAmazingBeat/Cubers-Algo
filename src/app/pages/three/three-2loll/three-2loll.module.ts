import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreeOllPageRoutingModule } from './three-2loll-routing.module';

import { Three2LOllPage } from './three-2loll.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ThreeOllPageRoutingModule, SharedModule],
  declarations: [Three2LOllPage],
})
export class Three2LOllPageModule {}
