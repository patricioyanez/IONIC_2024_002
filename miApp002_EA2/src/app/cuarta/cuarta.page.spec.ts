import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuartaPage } from './cuarta.page';

describe('CuartaPage', () => {
  let component: CuartaPage;
  let fixture: ComponentFixture<CuartaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
