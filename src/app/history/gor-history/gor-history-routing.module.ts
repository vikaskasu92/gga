import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GorHistoryPage } from './gor-history.page';

const routes: Routes = [
  {
    path: '',
    component: GorHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GorHistoryPageRoutingModule {}
