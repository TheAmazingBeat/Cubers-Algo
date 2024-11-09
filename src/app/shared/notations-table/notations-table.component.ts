import { Component, Input, OnInit } from '@angular/core';
import { Notation } from 'src/app/interfaces/notations';

@Component({
  selector: 'app-notations-table',
  templateUrl: './notations-table.component.html',
  styleUrls: ['./notations-table.component.scss'],
})
export class NotationsTableComponent {
  @Input() notations: Notation[] = [];

  constructor() {}
}
