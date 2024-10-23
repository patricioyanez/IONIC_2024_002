import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeptimaPageRoutingModule } from './septima-routing.module';

import { SeptimaPage } from './septima.page';
/*
https://www.npmjs.com/package/angularx-qrcode

npm install angularx-qrcode --save
ojo con la version de angular
*/
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SeptimaPageRoutingModule
  ],
  declarations: [SeptimaPage]
})
export class SeptimaPageModule {}
