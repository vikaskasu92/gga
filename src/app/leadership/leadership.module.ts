import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadershipPageRoutingModule } from './leadership-routing.module';

import { LeadershipPage } from './leadership.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadershipPageRoutingModule,
    SharedModule
  ],
  declarations: [LeadershipPage]
})
export class LeadershipPageModule {}
