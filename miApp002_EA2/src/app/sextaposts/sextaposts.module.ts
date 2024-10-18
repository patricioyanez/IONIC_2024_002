import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextapostsPageRoutingModule } from './sextaposts-routing.module';

import { SextapostsPage } from './sextaposts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextapostsPageRoutingModule
  ],
  declarations: [SextapostsPage]
})
export class SextapostsPageModule {}
