import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundersPage } from './founders.page';

const routes: Routes = [
  {
    path: '',
    component: FoundersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundersPageRoutingModule {}
