import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GorHistoryPageRoutingModule } from './gor-history-routing.module';

import { GorHistoryPage } from './gor-history.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GorHistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [GorHistoryPage]
})
export class GorHistoryPageModule {}
