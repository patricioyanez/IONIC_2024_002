import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { CalculadoraPage } from './calculadora.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
// npm test
describe('== Formulario Calculadora: ', () => {
  let component: CalculadoraPage;
  let fixture: ComponentFixture<CalculadoraPage>;

  beforeEach(waitForAsync(async() => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraPage],
      imports: [IonicModule.forRoot(), FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Botón sumar', fakeAsync(() => {
    fixture.componentInstance.n1 = 3;
    fixture.componentInstance.n2 = 5;

    document.getElementById("sumar")?.click();
    fixture.detectChanges();
    tick();

    const resultado = (<HTMLInputElement>document.getElementById("res")).value;
    expect("" + resultado).toEqual("8");
  }));
/*
Ejercicio 45:
  Crear boton para -,/ y * y aplicar pruebas e2e
*/

});
