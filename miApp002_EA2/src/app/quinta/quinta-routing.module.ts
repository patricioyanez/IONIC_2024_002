import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintaPage } from './quinta.page';

const routes: Routes = [
  {
    path: '',
    component: QuintaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuintaPageRoutingModule {}
