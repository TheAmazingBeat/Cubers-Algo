import { Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  minutes: number = 0;
  seconds: number = 0;
  partSeconds: number = 0;
  centisecond: number = 0;
  decisecond: number = 0;
  isPaused: boolean = true;
  timerInterval: any;
  readyInterval: any;
  isReady: 'stopped' | 'not-ready' | 'ready' = 'stopped';
  isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  new = output<number>();

  ngOnInit() {
    this.reset();

    document.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        this.getReady(event);
      }
      if (event.key === 'r') {
        this.reset(event);
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === ' ') {
        this.stopOrStart(event);
      }
    });
  }

  start() {
    // Don't create another interval if timer is already running
    if (!this.isPaused) {
      clearInterval(this.readyInterval);
      this.isReady = 'stopped';
      return;
    }
    this.isReady = 'ready';
    this.isPaused = false;
    this.timerInterval = setInterval(() => this.increaseDeciSeconds(), 10);
  }

  stop() {
    this.isPaused = true;
    this.isReady = 'stopped';
    clearInterval(this.timerInterval);
    this.timerInterval = undefined;
  }

  reset(event?: MouseEvent | KeyboardEvent) {
    // Prevent the reset button from starting the timer
    event?.stopPropagation();
    event?.stopImmediatePropagation();
    this.stop();
    this.minutes = 0;
    this.seconds = 0;
    this.centisecond = 0;
    this.decisecond = 0;
  }

  increaseDeciSeconds() {
    // Firefox has a bug where the timer is not accurate
    if (this.isFirefox) {
      if (this.decisecond === 6) {
        this.increaseCentiseconds();
        this.decisecond = 0;
      } else this.decisecond++;
      return;
    }

    if (this.decisecond === 9) {
      this.partSeconds = 0;
      this.increaseSeconds();
    } else this.partSeconds++;
    return;
  }

  increaseCentiseconds() {
    if (this.centisecond === 9) {
      this.centisecond = 0;
      this.increaseSeconds();
    } else this.centisecond++;
  }

  increaseSeconds() {
    if (this.seconds === 59) {
      this.seconds = 0;
      this.increaseMinutes();
    } else {
      this.seconds++;
    }
  }

  increaseMinutes() {
    if (this.minutes === 59) {
      this.minutes = 0;
    } else this.minutes++;
  }

  numberToString(seconds: number) {
    if (seconds < 10) {
      return `0${seconds}`;
    }
    return `${seconds}`;
  }

  // Event handlers to start, stop, and reset the timer
  getReady(event: MouseEvent | KeyboardEvent | TouchEvent) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    // Stop the timer if it is running
    if (!this.isPaused) return;

    this.isReady = 'not-ready';
  }

  stopOrStart(event: MouseEvent | KeyboardEvent | TouchEvent) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    if (!this.isPaused) {
      this.stop();
      this.newSolve(true)
    } else {
      this.reset();
      this.start();
    }
  }

  newSolve(changeToNew: boolean) {
    if (changeToNew) {
      this.new.emit(1);
    }
  }
}
