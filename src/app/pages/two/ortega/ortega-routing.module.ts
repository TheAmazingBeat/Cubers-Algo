import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrtegaPage } from './ortega.page';

const routes: Routes = [
  {
    path: '',
    component: OrtegaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrtegaPageRoutingModule {}
