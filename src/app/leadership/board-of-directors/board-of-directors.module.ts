import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardOfDirectorsPageRoutingModule } from './board-of-directors-routing.module';

import { BoardOfDirectorsPage } from './board-of-directors.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardOfDirectorsPageRoutingModule,
    SharedModule
  ],
  declarations: [BoardOfDirectorsPage]
})
export class BoardOfDirectorsPageModule {}
