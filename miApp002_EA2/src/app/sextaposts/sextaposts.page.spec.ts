import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SextapostsPage } from './sextaposts.page';

describe('SextapostsPage', () => {
  let component: SextapostsPage;
  let fixture: ComponentFixture<SextapostsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SextapostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
