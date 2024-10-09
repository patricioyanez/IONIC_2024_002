import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartaPage } from './cuarta.page';

const routes: Routes = [
  {
    path: '',
    component: CuartaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuartaPageRoutingModule {}
