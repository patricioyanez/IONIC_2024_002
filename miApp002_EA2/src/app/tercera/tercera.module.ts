import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceraPageRoutingModule } from './tercera-routing.module';

import { TerceraPage } from './tercera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceraPageRoutingModule
  ],
  declarations: [TerceraPage]
})
export class TerceraPageModule {}
