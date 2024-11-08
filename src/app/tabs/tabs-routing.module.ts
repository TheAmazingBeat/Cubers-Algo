import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'algos',
        loadChildren: () =>
          import('../tab1-algos/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'algos/three/three-oll',
        loadChildren: () =>
          import('../pages/three/three-oll/three-oll.module').then(
            (m) => m.ThreeOllPageModule
          ),
      },
      {
        path: 'algos/three/three-pll',
        loadChildren: () =>
          import('../pages/three/three-pll/three-pll.module').then(
            (m) => m.ThreePllPageModule
          ),
      },
      {
        path: 'algos/three/notations',
        loadChildren: () =>
          import('../pages/three/notations/notations.module').then(
            (m) => m.NotationsPageModule
          ),
      },
      {
        path: 'timer',
        loadChildren: () =>
          import('../tab2-timer/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../tab3-settings/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: '',
        redirectTo: '/algos',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/algos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
