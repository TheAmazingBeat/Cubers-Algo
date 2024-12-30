import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'three/three-2loll',
    loadChildren: () =>
      import('../pages/three/three-2loll/three-2loll.module').then(
        (m) => m.Three2LOllPageModule
      ),
  },
  {
    path: 'three/three-pll',
    loadChildren: () =>
      import('../pages/three/three-pll/three-pll.module').then(
        (m) => m.ThreePllPageModule
      ),
  },
  {
    path: 'three/notations',
    loadChildren: () =>
      import('../pages/three/notations/notations.module').then(
        (m) => m.NotationsPageModule
      ),
  },
  {
      path: 'two/notations',
      loadChildren: () => import('../pages/two/notations/notations.module').then( m => m.NotationsPageModule)
    },
    {
      path: 'two/ortega',
      loadChildren: () => import('../pages/two/ortega/ortega.module').then( m => m.OrtegaPageModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
