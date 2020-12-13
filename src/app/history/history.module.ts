import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { SharedModule } from '../shared/shared.module';
import { FestivalsComponent } from './festivals/festivals.component';
import { GothrasComponent } from './gothras/gothras.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [
    HistoryPage,
    GothrasComponent,
    FestivalsComponent
  ]
})
export class HistoryPageModule {}
