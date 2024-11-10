import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Algo } from 'src/app/interfaces/algos';
import { AlgoModalComponent } from 'src/app/shared/algo-modal/algo-modal.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-three-2loll',
  templateUrl: './three-2loll.page.html',
  styleUrls: ['./three-2loll.page.scss'],
})
export class Three2LOllPage {
  isModalOpen = false;

  firstLook: Algo[] = [
    {
      name: 'Line',
      sequences: ["F (R U R' U') F'"],
      imgUrl: `${environment.imgUrl}/3394a52b-ef63-49c5-a8fa-61faa6d9f200/128`,
      imgAlt: '3x3 Line Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.F_(U_R_U-_R-)_F-&alg=F_(R_U_R-_U-)_F-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
    },
    {
      name: 'Elbow',
      sequences: ["f (R U R' U') f'"],
      imgUrl: `${environment.imgUrl}/56e011e2-c589-4cf7-5b93-bc8621ff1800/128`,
      imgAlt: '3x3 Elbow Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.f_(U_R_U-_R-)_f-&alg=f_(R_U_R-_U-)_f-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
    },
    {
      name: 'Dot',
      sequences: ["F (R U R' U') F'\nf (R U R' U') f'"],
      imgUrl: `${environment.imgUrl}/842170e7-6854-421e-2ab0-c8e1cabfd000/128`,
      imgAlt: '3x3 Dot Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.f_(U_R_U-_R-)_f-_F_(U_R_U-_R-)_F-&alg=F_(R_U_R-_U-)_F-_f_(R_U_R-_U-)_f-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
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
      setupAlgo: ['x2 y2'],
    },
    {
      name: 'Antisune',
      sequences: ["R U2 R' U' R U' R'"],
      imgUrl: `${environment.imgUrl}/727ca965-cb7a-4400-eb2f-d187d4b35000/128`,
      imgAlt: '3x3 Antisune Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.R_U_R-_U_R_U2_R-&alg=R_U2_R-_U-_R_U-_R-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
    },
    {
      name: 'Headlights',
      sequences: ["R2 D (R' U2 R) D' (R' U2 R')"],
      imgUrl: `${environment.imgUrl}/fec6464b-efc7-405f-266b-9d03724cab00/128`,
      imgAlt: '3x3 Headlights Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.R2_D_(R-_U2_R)_D-_(R-_U2_R-).R2_D_(R-_U2_R)_D-_(R-_U2_R-)&alg=R2_D_(R-_U2_R)_D-_(R-_U2_R-)&view=playback',
      ],
      setupAlgo: ['x2 y2'],
    },
    {
      name: 'T',
      sequences: ["(r U R' U') r' (F R F')"],
      imgUrl: `${environment.imgUrl}/cee8449d-300d-4bdf-61f5-ed3823080900/128`,
      imgAlt: '3x3 T Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.(r_U_R-_U-)_r-_(F_R_F-).(r_U_R-_U-)_r-_(F_R_F-)&alg=(r_U_R-_U-)_r-_(F_R_F-)&view=playback',
      ],
      setupAlgo: ['x2 y2'],
    },
    {
      name: 'H',
      sequences: ["F (R U R' U') (R U R' U')\n(R U R' U') F'"],
      imgUrl: `${environment.imgUrl}/ab899dd0-6d3d-4169-9901-dce48ee8da00/128`,
      imgAlt: '3x3 H Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.F_(R_U_R-_U-)_(R_U_R-_U-)(R_U_R-_U-)_F-.&alg=F_(R_U_R-_U-)_(R_U_R-_U-)(R_U_R-_U-)_F-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
    },
    {
      name: 'Bowtie',
      sequences: ["F' (r U R' U') r' F R"],
      imgUrl: `${environment.imgUrl}/1db41de3-71f1-42fd-b3f1-97a8a6776200/128`,
      imgAlt: '3x3 Bowtie Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.F-_(r_U_R-_U-)_r-_F_R.F-_(r_U_R-_U-)_r-_F_R&alg=F-_(r_U_R-_U-)_r-_F_R&view=playback',
      ],
      setupAlgo: ['x2 y2'],
    },
    {
      name: 'Pi',
      sequences: ["R U2 R2' U' R2 U' R2' U2' R"],
      imgUrl: `${environment.imgUrl}/33dd7cd2-7ddc-4d3a-22ed-7572b9364300/128`,
      imgAlt: '3x3 Pi Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.R-_U2_R2_U_R2-_U_R2_U2-_R-&alg=R_U2_R2-_U-_R2_U-_R2-_U2-_R&view=playback',
      ],
      setupAlgo: ['x2 y2'],
    },
  ];

  constructor() {}
}
