import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExecutiveCommitteePage } from './executive-committee.page';

const routes: Routes = [
  {
    path: '',
    component: ExecutiveCommitteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecutiveCommitteePageRoutingModule {}
