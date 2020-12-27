import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundersPageRoutingModule } from './founders-routing.module';

import { FoundersPage } from './founders.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundersPageRoutingModule,
    SharedModule
  ],
  declarations: [FoundersPage]
})
export class FoundersPageModule {}
