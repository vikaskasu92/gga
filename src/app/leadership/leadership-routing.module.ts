import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadershipPage } from './leadership.page';

const routes: Routes = [
  {
    path: '',
    component: LeadershipPage
  },
  {
    path: 'founders',
    loadChildren: () => import('./founders/founders.module').then( m => m.FoundersPageModule)
  },
  {
    path: 'board-of-directors',
    loadChildren: () => import('./board-of-directors/board-of-directors.module').then( m => m.BoardOfDirectorsPageModule)
  },
  {
    path: 'executive-committee',
    loadChildren: () => import('./executive-committee/executive-committee.module').then( m => m.ExecutiveCommitteePageModule)
  },
  {
    path: 'advisory-committee',
    loadChildren: () => import('./advisory-committee/advisory-committee.module').then( m => m.AdvisoryCommitteePageModule)
  },
  {
    path: 'other-committee',
    loadChildren: () => import('./other-committee/other-committee.module').then( m => m.OtherCommitteePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadershipPageRoutingModule {}
