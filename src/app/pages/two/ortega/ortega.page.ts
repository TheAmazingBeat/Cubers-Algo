import { Component, OnInit } from '@angular/core';
import { Algo } from 'src/app/interfaces/algos';

@Component({
  selector: 'app-ortega',
  templateUrl: './ortega.page.html',
  styleUrls: ['./ortega.page.scss'],
})
export class OrtegaPage {
  oll: Algo[] = [
    {
      name: 'H',
      sequences: ['R2 U2 R U2 R2'],
      imgUrl: 'assets/algos/two/ortega/H.png',
      imgAlt: '2x2 Ortega H OLL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'Pi',
      sequences: ["R U2 R2 U' R2 U' R2 U2 R"],
      imgUrl: 'assets/algos/two/ortega/Pi.png',
      imgAlt: '2x2 Ortega Pi OLL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'Antisune',
      sequences: ["R U2 R' U' R U' R'"],
      imgUrl: 'assets/algos/two/ortega/Antisune.png',
      imgAlt: '2x2 Ortega Antisune OLL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'Sune',
      sequences: ["R U R' U R U2 R'"],
      imgUrl: 'assets/algos/two/ortega/Sune.png',
      imgAlt: '2x2 Ortega Sune OLL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'Bowtie',
      sequences: ["F R' F' R U R U' R'"],
      imgUrl: 'assets/algos/two/ortega/Bowtie.png',
      imgAlt: '2x2 Ortega Bowtie OLL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'T',
      sequences: ["R U R' U' R' F R F'"],
      imgUrl: 'assets/algos/two/ortega/T.png',
      imgAlt: '2x2 Ortega T OLL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'U',
      sequences: ["F R U R' U' F'"],
      imgUrl: 'assets/algos/two/ortega/U.png',
      imgAlt: '2x2 Ortega U OLL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
  ];

  pbl: Algo[] = [
    {
      name: 'Top Adjacent, Bottom Adjacent',
      sequences: ["R2 U' B2 U2 R2 U' R2"],
      imgUrl: 'assets/algos/two/ortega/adj-adj.png',
      imgAlt: '2x2 Ortega Top Adjacent, Bottom Adjacent PBL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'Top Adjacent, Bottom Diagonal',
      sequences: ["R U' R F2 R' U R'"],
      imgUrl: 'assets/algos/two/ortega/adj-diag.png',
      imgAlt: '2x2 Ortega Top Adjacent, Bottom Diagonal PBL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'Top Diagonal, Bottom Diagonal',
      sequences: ['R2 F2 R2'],
      imgUrl: 'assets/algos/two/ortega/diag-diag.png',
      imgAlt: '2x2 Ortega Top Diagonal, Bottom Diagonal PBL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'Top Adjacent, Bottom Solved',
      sequences: ["R U R' U' R' F R2 U' R' U' R U R' F'"],
      imgUrl: 'assets/algos/two/ortega/adj.png',
      imgAlt: '2x2 Ortega Top Adjacent, Bottom Solved PBL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
    {
      name: 'Top Diagonal, Bottom Solved',
      sequences: ["F R U' R' U' R U R' F' R U R' U' R' F R F'"],
      imgUrl: 'assets/algos/two/ortega/diag.png',
      imgAlt: '2x2 Ortega Top Diagonal, Bottom Solved PBL Algo',
      setupAlgo: ['x2 y2'],
      puzzleType: '2x2x2',
    },
  ];
}
