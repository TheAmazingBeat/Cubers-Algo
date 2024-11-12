import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScrambleComponent } from './scramble.component';

describe('ScrambleComponent', () => {
  let component: ScrambleComponent;
  let fixture: ComponentFixture<ScrambleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ScrambleComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrambleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have two consecutive move of the same side', () => {
    const sequences = component.stateSequence;
    let success = true;
    for (let i = 1; i < sequences.length; i++) {
      if (sequences[i - 1].charAt(0) === sequences[i].charAt(0)) {
        success = false;
        break;
      }
    }
    expect(success).toBe(true);
  });
});
