import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
// npm test
describe('HomePage ts: ', () => {
  let component: HomePage;

  beforeEach(async () => {
    component = new HomePage();
  });

  it('suma 2 numeros positivos', () => {
    expect(component.sumar(1,2)).toEqual(3);
  });
  it('suma 2 numeros negativos', () => {
    expect(component.sumar(-1,-20)).toEqual(-21);
  });
  it('suma 2 numeros, 1 es negativo', () => {
    expect(component.sumar(10,-15)).toBeLessThanOrEqual(0);
  });
});
