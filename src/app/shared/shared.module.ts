import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { NotationsTableComponent } from './notations-table/notations-table.component';
import { AlgoCategoryComponent } from './algo-category/algo-category.component';
import { AlgoComponent } from './algo/algo.component';
import { TwistyComponent } from './twisty/twisty.component';
import { AlgoModalComponent } from './algo-modal/algo-modal.component';
@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [
    TabHeaderComponent,
    NotationsTableComponent,
    AlgoCategoryComponent,
    AlgoComponent,
    AlgoModalComponent,
    TwistyComponent,
  ],
  exports: [
    TabHeaderComponent,
    NotationsTableComponent,
    AlgoCategoryComponent,
    AlgoComponent,
    AlgoModalComponent,
    TwistyComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
