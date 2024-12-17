import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrtegaPage } from './ortega.page';

describe('OrtegaPage', () => {
  let component: OrtegaPage;
  let fixture: ComponentFixture<OrtegaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrtegaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
