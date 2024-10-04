import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerceraDetallePage } from './tercera-detalle.page';

describe('TerceraDetallePage', () => {
  let component: TerceraDetallePage;
  let fixture: ComponentFixture<TerceraDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
