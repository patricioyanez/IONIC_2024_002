import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextaPageRoutingModule } from './sexta-routing.module';

import { SextaPage } from './sexta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextaPageRoutingModule
  ],
  declarations: [SextaPage]
})
export class SextaPageModule {}
