import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeOllPage } from './three-oll.page';

const routes: Routes = [
  {
    path: '',
    component: ThreeOllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreeOllPageRoutingModule {}
