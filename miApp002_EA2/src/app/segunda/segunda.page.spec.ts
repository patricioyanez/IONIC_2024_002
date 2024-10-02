import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegundaPage } from './segunda.page';

describe('SegundaPage', () => {
  let component: SegundaPage;
  let fixture: ComponentFixture<SegundaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
