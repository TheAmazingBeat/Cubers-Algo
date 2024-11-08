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
        loadChildren: () => import('../tab1-algos/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'timer',
        loadChildren: () => import('../tab2-timer/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../tab3-settings/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/algos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/algos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
