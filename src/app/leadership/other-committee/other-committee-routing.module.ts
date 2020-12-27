import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherCommitteePage } from './other-committee.page';

const routes: Routes = [
  {
    path: '',
    component: OtherCommitteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherCommitteePageRoutingModule {}
