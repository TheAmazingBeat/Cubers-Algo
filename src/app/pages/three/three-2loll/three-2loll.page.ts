import { Component, OnInit } from '@angular/core';
import { Algo } from 'src/app/interfaces/algos';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-three-2loll',
  templateUrl: './three-2loll.page.html',
  styleUrls: ['./three-2loll.page.scss'],
})
export class Three2LOllPage {
  firstLook: Algo[] = [
    {
      name: 'Line',
      sequences: ["F (R U R' U') F'"],
      imgUrl: `${environment.imgUrl}/3394a52b-ef63-49c5-a8fa-61faa6d9f200/128`,
      imgAlt: '3x3 Line Algo',
    },
    {
      name: 'Elbow',
      sequences: ["f (R U R' U') f'"],
      imgUrl: `${environment.imgUrl}/56e011e2-c589-4cf7-5b93-bc8621ff1800/128`,
      imgAlt: '3x3 Elbow Algo',
    },
    {
      name: 'Dot',
      sequences: ["[F (R U R' U') F']\n[f (R U R' U') f']"],
      imgUrl: `${environment.imgUrl}/842170e7-6854-421e-2ab0-c8e1cabfd000/128`,
      imgAlt: '3x3 Dot Algo',
    },
  ];

  constructor() {}
}
