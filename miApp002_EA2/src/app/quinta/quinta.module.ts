import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintaPageRoutingModule } from './quinta-routing.module';

import { QuintaPage } from './quinta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintaPageRoutingModule
  ],
  declarations: [QuintaPage]
})
export class QuintaPageModule {}
