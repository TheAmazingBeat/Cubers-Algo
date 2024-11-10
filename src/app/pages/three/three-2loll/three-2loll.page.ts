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
      simulationUrls: [],
    },
    {
      name: 'Elbow',
      sequences: ["f (R U R' U') f'"],
      imgUrl: `${environment.imgUrl}/56e011e2-c589-4cf7-5b93-bc8621ff1800/128`,
      imgAlt: '3x3 Elbow Algo',
      simulationUrls: [],
    },
    {
      name: 'Dot',
      sequences: ["[F (R U R' U') F']\n[f (R U R' U') f']"],
      imgUrl: `${environment.imgUrl}/842170e7-6854-421e-2ab0-c8e1cabfd000/128`,
      imgAlt: '3x3 Dot Algo',
      simulationUrls: [],
    },
  ];

  secondLook: Algo[] = [
    {
      name: 'Sune',
      sequences: ["R U R' U R U2 R'"],
      imgUrl: `${environment.imgUrl}/bc7d968e-47bb-4c94-ab22-218b880e6f00/128`,
      imgAlt: '3x3 Sune Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2_._y2_._R_U2_R-_U-_R_U-_R-&alg=R_U_R-_U_R_U2_R-&view=playback',
      ],
    },
    {
      name: 'Antisune',
      sequences: ["R U2 R' U' R U' R'"],
      imgUrl: `${environment.imgUrl}/727ca965-cb7a-4400-eb2f-d187d4b35000/128`,
      imgAlt: '3x3 Antisune Algo',
      simulationUrls: [],
    },
    {
      name: 'Headlights',
      sequences: ["R2 D (R' U2 R) D' (R' U2 R')"],
      imgUrl: `${environment.imgUrl}/fec6464b-efc7-405f-266b-9d03724cab00/128`,
      imgAlt: '3x3 Headlights Algo',
      simulationUrls: [],
    },
    {
      name: 'T',
      sequences: ["(r U R' U') r' (F R F')"],
      imgUrl: `${environment.imgUrl}/cee8449d-300d-4bdf-61f5-ed3823080900/128`,
      imgAlt: '3x3 T Algo',
      simulationUrls: [],
    },
    {
      name: 'H',
      sequences: ["F (R U R' U') (R U R' U')\n(R U R' U') F'"],
      imgUrl: `${environment.imgUrl}/ab899dd0-6d3d-4169-9901-dce48ee8da00/128`,
      imgAlt: '3x3 H Algo',
      simulationUrls: [],
    },
    {
      name: 'Bowtie',
      sequences: ["F' (r U R' U') r' F R"],
      imgUrl: `${environment.imgUrl}/1db41de3-71f1-42fd-b3f1-97a8a6776200/128`,
      imgAlt: '3x3 Bowtie Algo',
      simulationUrls: [],
    },
    {
      name: 'Pi',
      sequences: ["R U2 R2' U' R2 U' R2' U2' R"],
      imgUrl: `${environment.imgUrl}/33dd7cd2-7ddc-4d3a-22ed-7572b9364300/128`,
      imgAlt: '3x3 Pi Algo',
      simulationUrls: [],
    },
  ];

  constructor() {}
}
