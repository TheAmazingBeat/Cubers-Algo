import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabHeaderComponent } from './tab-header/tab-header.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [TabHeaderComponent],
  exports: [TabHeaderComponent],
})
export class SharedModule {}
