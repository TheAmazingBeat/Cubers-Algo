import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Three2LOllPage } from './three-2loll.page';

const routes: Routes = [
  {
    path: '',
    component: Three2LOllPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreeOllPageRoutingModule {}
