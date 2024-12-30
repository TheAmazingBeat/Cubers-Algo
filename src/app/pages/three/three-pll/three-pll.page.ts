import { Component, OnInit } from '@angular/core';
import { Algo } from 'src/app/interfaces/algos';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-three-pll',
  templateUrl: './three-pll.page.html',
  styleUrls: ['./three-pll.page.scss'],
})
export class ThreePllPage {
  edgeOnly: Algo[] = [
    {
      name: 'Ua',
      sequences: ["M2' U M U2' M' U M2'"],
      imgUrl: `${environment.imgUrl}/af79bbee-0c30-453e-7812-c8faddc2a700/128`,
      imgAlt: '3x3 Ua Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.M2_U-_M_U2_M-_U-_M2&alg=M2-_U_M_U2-_M-_U_M2-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Ub',
      sequences: ["M2' U' M U2' M' U' M2'"],
      imgUrl: `${environment.imgUrl}/2d181933-2717-433e-e7be-2c309e282300/128`,
      imgAlt: '3x3 Ub Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.M2_U_M_U2_M-_U_M2&alg=M2-_U-_M_U2-_M-_U-_M2-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'H',
      sequences: ["M2' U M2' U2 M2' U M2'"],
      imgUrl: `${environment.imgUrl}/086c7b48-b39e-4e01-bbe5-d8ee79074900/128`,
      imgAlt: '3x3 H Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.M2-_U_M2-_U2_M2-_U_M2-&alg=M2-_U_M2-_U2_M2-_U_M2-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Z',
      sequences: ["M2' U' M2' U' M' U2 M2' U2 M' U2"],
      imgUrl: `${environment.imgUrl}/8ec67136-3eff-4262-34ef-5726bb14bc00/128`,
      imgAlt: '3x3 Z Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.M2-_U-_M2-_U-_M-_U2_M2-_U2_M-_U2&alg=M2-_U-_M2-_U-_M-_U2_M2-_U2_M-_U2&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
  ];

  cornersOnly: Algo[] = [
    {
      name: 'Aa',
      sequences: ["x (R' U R') D2 (R U' R') D2 R2 x'"],
      imgUrl: `${environment.imgUrl}/4e948d1c-837a-4ef3-ac31-373565ed2000/128`,
      imgAlt: '3x3 Aa Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.x_R2-_D2-_(R_U_R-)_D2-_(R_U-_R)_x-&alg=x_(R-_U_R-)_D2_(R_U-_R-)_D2_R2_x-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Ab',
      sequences: ["x R2' D2 (R U R') D2 (R U' R) x'"],
      imgUrl: `${environment.imgUrl}/219ecbc4-8f39-4b30-5b56-b79a486f3800/128`,
      imgAlt: '3x3 Ab Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.x_(R-_U_R-)_D2-_(R_U-_R-)_D2-_R2_x-&alg=x_R2-_D2_(R_U_R-)_D2_(R_U-_R)_x-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'E',
      sequences: ["x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x"],
      imgUrl: `${environment.imgUrl}/9cb15fa9-8947-4077-e09f-bfe89579e400/128`,
      imgAlt: '3x3 E Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.x-_(D_R_U_R-)_(D-_R_U-_R-)_(D_R_U-_R-)_(D-_R_U_R-)_x&alg=x-_(R_U-_R-_D)_(R_U_R-_D-)_(R_U_R-_D)_(R_U-_R-_D-)_x&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
  ];

  swapAdjacentCorners: Algo[] = [
    {
      name: 'Ra',
      sequences: ["(R U' R' U') (R U R D) (R' U' R D') (R' U2 R') U'"],
      imgUrl: `${environment.imgUrl}/974ab4d9-e076-4c45-88d8-5ded946f8a00/128`,
      imgAlt: '3x3 Ra Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.U_(R_U2-_R)_(D_R-_U_R)_(D-_R-_U-_R-)_(U_R_U_R-)&alg=(R_U-_R-_U-)_(R_U_R_D)_(R-_U-_R_D-)_(R-_U2_R-)_U-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Rb',
      sequences: ["(R' U2 R U2') R' F (R U R' U') R' F' R2 U'"],
      imgUrl: `${environment.imgUrl}/44e818fb-c6e5-4bb4-b54e-f36007878b00/128`,
      imgAlt: '3x3 Rb Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.U_R2-_F_R_(U_R_U-_R-)_F-_R_(U2_R-_U2-_R)&alg=(R-_U2_R_U2-)_R-_F_(R_U_R-_U-)_R-_F-_R2_U-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Ja',
      sequences: [
        "(R' U L' U2) (R U' R' U2 R) L U'",
        " y' (L' U' L F) (L' U' L U) L F' L2' U L U",
      ],
      imgUrl: `${environment.imgUrl}/95bd8cf2-c754-489a-a986-9060b8b1ab00/128`,
      imgAlt: '3x3 Ja Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.U_L-_(R-_U2-_R_U_R-)_(U2-_L_U-_R)&alg=(R-_U_L-_U2)_(R_U-_R-_U2_R)_L_U-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Jb',
      sequences: ["(R U R' F') (R U R' U') R' F R2 U' R' U'"],
      imgUrl: `${environment.imgUrl}/d9e9ce26-e2e8-4033-7064-5732266f5a00/128`,
      imgAlt: '3x3 Jb Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.U_R_U_R2-_F-_R_(U_R_U-_R-)_(F_R_U-_R-)&alg=(R_U_R-_F-)_(R_U_R-_U-)_R-_F_R2_U-_R-_U-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'F',
      sequences: ["(R' U' F') (R U R' U') (R' F R2 U') (R' U' R U) (R' U R)"],
      imgUrl: `${environment.imgUrl}/a5eaad1b-3b59-4996-2e13-bc5a99cf9100/128`,
      imgAlt: '3x3 F Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.(R-_U-_R)_(U-_R-_U_R)_(U_R2-_F-_R)_(U_R_U-_R-)_(F_U_R)&alg=(R-_U-_F-)_(R_U_R-_U-)_(R-_F_R2_U-)_(R-_U-_R_U)_(R-_U_R)&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'T',
      sequences: ["(R U R' U') (R' F R2 U') R' U' (R U R' F')"],
      imgUrl: `${environment.imgUrl}/d4e592a6-6e0a-4c0a-42f2-c01938bffa00/128`,
      imgAlt: '3x3 T Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.(F_R_U-_R-)_U_R_(U_R2-_F-_R)_(U_R_U-_R-)&alg=(R_U_R-_U-)_(R-_F_R2_U-)_R-_U-_(R_U_R-_F-)&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
  ];

  swapCornersDiagonally: Algo[] = [
    {
      name: 'V',
      sequences: ["(R' U R' U') y (R' F' R2 U') (R' U R' F) R F"],
      imgUrl: `${environment.imgUrl}/a942966f-6f33-44d0-8121-8cd97e964b00/128`,
      imgAlt: '3x3 V Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.F-_R-_(F-_R_U-_R)_(U_R2-_F_R)_y-_(U_R_U-_R)&alg=(R-_U_R-_U-)_y_(R-_F-_R2_U-)_(R-_U_R-_F)_R_F&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Y',
      sequences: ["F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')"],
      imgUrl: `${environment.imgUrl}/8fb4e140-f6bc-470b-e627-5d3adac3e500/128`,
      imgAlt: '3x3 Y Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.F_(R_U-_R-_U-)_(R_U_R-_F-)_(R_U_R-_U-)_(R-_F_R_F-)&alg=F_(R_U-_R-_U-)_(R_U_R-_F-)_(R_U_R-_U-)_(R-_F_R_F-)&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Na',
      sequences: [
        "(R U R' U) (R U R' F') (R U R' U') (R' F R2 U') R' U2 (R U' R')",
      ],
      imgUrl: `${environment.imgUrl}/2f0fdac0-0b34-47df-789c-af12354d7800/128`,
      imgAlt: '3x3 Na Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.(R_U_R-_U)_(R_U_R-_F-)_(R_U_R-_U-)_(R-_F_R2_U-)_R-_U2_(R_U-_R-)&alg=(R_U_R-_U)_(R_U_R-_F-)_(R_U_R-_U-)_(R-_F_R2_U-)_R-_U2_(R_U-_R-)&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Nb',
      sequences: ["(R' U R U') (R' F' U' F) (R U R' F) R' F' (R U' R)"],
      imgUrl: `${environment.imgUrl}/76e82218-755b-4d68-72c2-6834de8a4200/128`,
      imgAlt: '3x3 Nb Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.(R-_U_R_U-)_(R-_F-_U-_F)_(R_U_R-_F)_R-_F-_(R_U-_R)&alg=(R-_U_R_U-)_(R-_F-_U-_F)_(R_U_R-_F)_R-_F-_(R_U-_R)&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
  ];

  doubleCycles: Algo[] = [
    {
      name: 'Ga',
      sequences: ["R2 U (R' U R' U') (R U' R2) D U' (R' U R D') U"],
      imgUrl: `${environment.imgUrl}/953199b5-9879-4a9b-fb2c-6035a6254a00/128`,
      imgAlt: '3x3 Ga Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.U-_(D_R-_U-_R)_U_D-_(R2-_U_R-)_(U_R_U-_R)_U-_R2-&alg=R2_U_(R-_U_R-_U-)_(R_U-_R2)_D_U-_(R-_U_R_D-)_U&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Gb',
      sequences: ["(F' U' F) (R2 u R' U) (R U' R u') R2"],
      imgUrl: `${environment.imgUrl}/c08bd81e-3c74-4f0d-fb56-7054ef6c3b00/128`,
      imgAlt: '3x3 Gb Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.R2-_(u_R-_U_R-)_(U-_R_u-_R2-)_(F-_U_F)&alg=(F-_U-_F)_(R2_u_R-_U)_(R_U-_R_u-)_R2&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Gc',
      sequences: ["R2 U' (R U' R U) (R' U R2 D') (U R U' R') D U'"],
      imgUrl: `${environment.imgUrl}/5e0c967d-551b-4b39-1cdd-1ccbb22a4000/128`,
      imgAlt: '3x3 Gc Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.U_D-_(R_U_R-_U-)_(D_R2-_U-_R)_(U-_R-_U_R-)_U_R2-&alg=R2_U-_(R_U-_R_U)_(R-_U_R2_D-)_(U_R_U-_R-)_D_U-&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
    {
      name: 'Gd',
      sequences: ["D' (R U R' U') D (R2 U' R U') (R' U R' U) R2 U"],
      imgUrl: `${environment.imgUrl}/01d439e1-dc35-40bc-09ce-5ae67f901600/128`,
      imgAlt: '3x3 Gd Perm Algo',
      simulationUrls: [
        'https://alg.cubing.net/?setup=x2y2.U-_R2-_(U-_R_U-_R)_(U_R-_U_R2-)_D-_(U_R_U-_R-)_D&alg=D-_(R_U_R-_U-)_D_(R2_U-_R_U-)_(R-_U_R-_U)_R2_U&view=playback',
      ],
      setupAlgo: ['x2 y2'],
      puzzleType: '3x3x3',
    },
  ];

  constructor() {}
}
