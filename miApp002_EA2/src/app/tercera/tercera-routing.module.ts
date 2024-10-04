import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceraPage } from './tercera.page';

const routes: Routes = [
  {
    path: '',
    component: TerceraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceraPageRoutingModule {}
