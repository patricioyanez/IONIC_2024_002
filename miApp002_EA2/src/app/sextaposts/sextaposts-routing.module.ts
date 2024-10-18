import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextapostsPage } from './sextaposts.page';

const routes: Routes = [
  {
    path: '',
    component: SextapostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextapostsPageRoutingModule {}
