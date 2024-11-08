import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreePllPage } from './three-pll.page';

const routes: Routes = [
  {
    path: '',
    component: ThreePllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreePllPageRoutingModule {}
