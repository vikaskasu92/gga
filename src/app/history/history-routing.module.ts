import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FestivalsComponent } from './festivals/festivals.component';
import { GothrasComponent } from './gothras/gothras.component';

import { HistoryPage } from './history.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage
  },
  {
    path:'gothras',
    component: GothrasComponent
  },
  {
    path: 'festivals',
    component: FestivalsComponent
  },
  {
    path: 'gor-history',
    loadChildren: () => import('./gor-history/gor-history.module').then( m => m.GorHistoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryPageRoutingModule {}
