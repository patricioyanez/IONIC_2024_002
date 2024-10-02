import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundaPage } from './segunda.page';

const routes: Routes = [
  {
    path: '',
    component: SegundaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundaPageRoutingModule {}
