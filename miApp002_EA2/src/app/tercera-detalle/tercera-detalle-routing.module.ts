import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceraDetallePage } from './tercera-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: TerceraDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceraDetallePageRoutingModule {}
