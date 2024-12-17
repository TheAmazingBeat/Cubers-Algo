import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotationsPage } from './notations.page';

const routes: Routes = [
  {
    path: '',
    component: NotationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotationsPageRoutingModule {}
