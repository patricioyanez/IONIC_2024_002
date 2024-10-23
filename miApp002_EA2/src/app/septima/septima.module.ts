import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeptimaPageRoutingModule } from './septima-routing.module';

import { SeptimaPage } from './septima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeptimaPageRoutingModule
  ],
  declarations: [SeptimaPage]
})
export class SeptimaPageModule {}
