import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from './pipe/date.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    FlexLayoutModule
  ],
  declarations: [HeaderComponent,FooterComponent, DatePipe],
  exports: [
    HeaderComponent,
    FooterComponent,
    DatePipe,
    FlexLayoutModule
  ]
})
export class SharedModule {}
