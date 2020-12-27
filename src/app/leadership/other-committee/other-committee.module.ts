import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherCommitteePageRoutingModule } from './other-committee-routing.module';

import { OtherCommitteePage } from './other-committee.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherCommitteePageRoutingModule,
    SharedModule
  ],
  declarations: [OtherCommitteePage]
})
export class OtherCommitteePageModule {}
