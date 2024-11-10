import { Component, Input, OnInit } from '@angular/core';
import { Algo } from 'src/app/interfaces/algos';

@Component({
  selector: 'app-algo-category',
  templateUrl: './algo-category.component.html',
  styleUrls: ['./algo-category.component.scss'],
})
export class AlgoCategoryComponent {
  @Input() categoryTitle: string = '';
  @Input() algos: Algo[] = [];

  constructor() {}
}
