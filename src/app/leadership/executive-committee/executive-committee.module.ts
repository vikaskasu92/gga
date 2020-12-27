import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExecutiveCommitteePageRoutingModule } from './executive-committee-routing.module';

import { ExecutiveCommitteePage } from './executive-committee.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExecutiveCommitteePageRoutingModule,
    SharedModule
  ],
  declarations: [ExecutiveCommitteePage]
})
export class ExecutiveCommitteePageModule {}
