import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuintaPage } from './quinta.page';

describe('QuintaPage', () => {
  let component: QuintaPage;
  let fixture: ComponentFixture<QuintaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
