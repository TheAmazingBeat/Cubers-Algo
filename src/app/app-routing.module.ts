import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notations',
    loadChildren: () => import('./pages/two/notations/notations.module').then( m => m.NotationsPageModule)
  },
  {
    path: 'ortega',
    loadChildren: () => import('./pages/two/ortega/ortega.module').then( m => m.OrtegaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
