import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreeOllPage } from './three-oll.page';

describe('ThreeOllPage', () => {
  let component: ThreeOllPage;
  let fixture: ComponentFixture<ThreeOllPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeOllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
