import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeptimaPage } from './septima.page';

describe('SeptimaPage', () => {
  let component: SeptimaPage;
  let fixture: ComponentFixture<SeptimaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
