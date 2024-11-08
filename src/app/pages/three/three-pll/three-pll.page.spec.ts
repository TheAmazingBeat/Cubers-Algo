import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreePllPage } from './three-pll.page';

describe('ThreePllPage', () => {
  let component: ThreePllPage;
  let fixture: ComponentFixture<ThreePllPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
