import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceraDetallePageRoutingModule } from './tercera-detalle-routing.module';

import { TerceraDetallePage } from './tercera-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceraDetallePageRoutingModule
  ],
  declarations: [TerceraDetallePage]
})
export class TerceraDetallePageModule {}
