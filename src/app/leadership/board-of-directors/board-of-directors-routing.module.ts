import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardOfDirectorsPage } from './board-of-directors.page';

const routes: Routes = [
  {
    path: '',
    component: BoardOfDirectorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardOfDirectorsPageRoutingModule {}
