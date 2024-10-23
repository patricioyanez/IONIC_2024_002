import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeptimaPage } from './septima.page';

const routes: Routes = [
  {
    path: '',
    component: SeptimaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeptimaPageRoutingModule {}
