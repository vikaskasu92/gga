import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvisoryCommitteePage } from './advisory-committee.page';

const routes: Routes = [
  {
    path: '',
    component: AdvisoryCommitteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvisoryCommitteePageRoutingModule {}
