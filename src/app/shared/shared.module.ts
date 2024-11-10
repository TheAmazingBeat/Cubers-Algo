import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { NotationsTableComponent } from './notations-table/notations-table.component';
import { AlgoCategoryComponent } from './algo-category/algo-category.component';
import { AlgoComponent } from './algo/algo.component';
@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [
    TabHeaderComponent,
    NotationsTableComponent,
    AlgoCategoryComponent,
    AlgoComponent,
  ],
  exports: [
    TabHeaderComponent,
    NotationsTableComponent,
    AlgoCategoryComponent,
    AlgoComponent,
  ],
})
export class SharedModule {}
