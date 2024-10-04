import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerceraPage } from './tercera.page';

describe('TerceraPage', () => {
  let component: TerceraPage;
  let fixture: ComponentFixture<TerceraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
