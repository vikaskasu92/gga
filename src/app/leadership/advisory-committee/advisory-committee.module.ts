import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvisoryCommitteePageRoutingModule } from './advisory-committee-routing.module';

import { AdvisoryCommitteePage } from './advisory-committee.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvisoryCommitteePageRoutingModule,
    SharedModule
  ],
  declarations: [AdvisoryCommitteePage]
})
export class AdvisoryCommitteePageModule {}
