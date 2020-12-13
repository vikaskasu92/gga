import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from './pipe/date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [HeaderComponent,FooterComponent, DatePipe],
  exports: [
    HeaderComponent,
    FooterComponent,
    DatePipe
  ]
})
export class SharedModule {}
