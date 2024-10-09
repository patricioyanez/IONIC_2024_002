import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartaPageRoutingModule } from './cuarta-routing.module';

import { CuartaPage } from './cuarta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuartaPageRoutingModule
  ],
  declarations: [CuartaPage]
})
export class CuartaPageModule {}
