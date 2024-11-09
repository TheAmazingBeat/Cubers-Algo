import { Component, OnInit } from '@angular/core';
import { Notation } from 'src/app/interfaces/notations';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-notations',
  templateUrl: './notations.page.html',
  styleUrls: ['./notations.page.scss'],
})
export class NotationsPage {
  notations: Notation[] = [
    {
      notation: 'R',
      imgSrc: `${environment.imgUrl}/6f717ce4-d01f-4115-8a42-deca6b267a00/128`,
      imgAlt: "3x3 Rubik's Cube R Notation",
      description:
        'Turn the right side of the cube up. If you put the right side in front of you, it is turned clockwise.',
    },
    {
      notation: "R'",
      imgSrc: `${environment.imgUrl}/031307f6-9598-442c-0fe2-f58546f0b600/128`,
      imgAlt: "3x3 Rubik's Cube R' Notation",
      description:
        'Turn the right side of the cube down. If you put the right side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'L',
      imgSrc: `${environment.imgUrl}/6970f1a4-f7c7-4c98-fffb-509ea568f100/128`,
      imgAlt: "3x3 Rubik's Cube L Notation",
      description:
        'Turn the left side of the cube up. If you put the left side in front of you, it is turned clockwise.',
    },
    {
      notation: "L'",
      imgSrc: `${environment.imgUrl}/34243472-5992-49d6-c7de-000f7dc0ba00/128`,
      imgAlt: "3x3 Rubik's Cube L' Notation",
      description:
        'Turn the left side of the cube down. If you put the left side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'U',
      imgSrc: `${environment.imgUrl}/b76a3c14-19a7-4b26-2818-f291b8f48500/128`,
      imgAlt: "3x3 Rubik's Cube U Notation",
      description:
        'Turn the top side of the cube to the left. If you put the top side in front of you, it is turned clockwise.',
    },
    {
      notation: "U'",
      imgSrc: `${environment.imgUrl}/65cc26a7-e6f3-476b-9753-f82759920c00/128`,
      imgAlt: "3x3 Rubik's Cube U' Notation",
      description:
        'Turn the top side of the cube to the right. If you put the top side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'D',
      imgSrc: `${environment.imgUrl}/0f7ac3d8-2a82-40e4-43d0-cd543dfa7900/128`,
      imgAlt: "3x3 Rubik's Cube D Notation",
      description:
        'Turn the bottom side of the cube to the right. If you put the bottom side in front of you, it is turned clockwise.',
    },
    {
      notation: "D'",
      imgSrc: `${environment.imgUrl}/8ea5c671-c6ba-4b72-e717-19e7317bab00/128`,
      imgAlt: "3x3 Rubik's Cube D' Notation",
      description:
        'Turn the bottom side of the cube to the left. If you put the bottom side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'F',
      imgSrc: `${environment.imgUrl}/32476f58-258e-4837-52ab-1a3cccfc0500/128`,
      imgAlt: "3x3 Rubik's Cube F Notation",
      description:
        'Turn the front side of the cube to the right. If you put the front side in front of you, it is turned clockwise.',
    },
    {
      notation: "F'",
      imgSrc: `${environment.imgUrl}/c35b681c-0718-4585-1e87-1721ffe34400/128`,
      imgAlt: "3x3 Rubik's Cube F' Notation",
      description:
        'Turn the front side of the cube to the left. If you put the front side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'B',
      imgSrc: `${environment.imgUrl}/d5757567-e69b-4779-87f1-228026fbef00/128`,
      imgAlt: "3x3 Rubik's Cube B Notation",
      description:
        'Turn the back side of the cube clockwise. If you put the back side in front of you, it is turned clockwise.',
    },
    {
      notation: "B'",
      imgSrc: `${environment.imgUrl}/aad0cfff-bffb-48ab-0f34-4524cfe4fa00/128`,
      imgAlt: "3x3 Rubik's Cube B' Notation",
      description:
        'Turn the back side of the cube counterclockwise. If you put the back side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'x',
      imgSrc: `${environment.imgUrl}/871e6561-8a22-4c6f-8521-62626cea3f00/128`,
      imgAlt: "3x3 Rubik's Cube x Notation",
      description:
        'Imagine there is an x axis across the middle of the cube. Turn the whole cube upwards from that imaginary axis. If you look at the right side of the cube, the whole cube is turned clockwise.',
    },
    {
      notation: "x'",
      imgSrc: `${environment.imgUrl}/2ab54320-c1e5-43c9-bd54-10f74021f200/128`,
      imgAlt: "3x3 Rubik's Cube x' Notation",
      description:
        'Imagine there is an x axis across the middle of the cube. Turn the whole cube downwards from that imaginary axis. If you look at the right side of the cube, the whole cube is turned counterclockwise.',
    },
    {
      notation: 'y',
      imgSrc: `${environment.imgUrl}/c064c466-735d-45e4-fd63-d74cbcb5d300/128`,
      imgAlt: "3x3 Rubik's Cube y Notation",
      description:
        'Imagine there is a y axis across the middle of the cube. Turn the whole cube to the left from that imaginary axis. If you look at the top side of the cube, the whole cube is turned clockwise.',
    },
    {
      notation: "y'",
      imgSrc: `${environment.imgUrl}/258a074a-ef5c-49e3-bf96-077d3b752300/128`,
      imgAlt: "3x3 Rubik's Cube y' Notation",
      description:
        'Imagine there is a y axis across the middle of the cube. Turn the whole cube to the right from that imaginary axis. If you look at the top side of the cube, the whole cube is turned counterclockwise.',
    },
    {
      notation: 'r',
      imgSrc: `${environment.imgUrl}/0056cab7-4cb5-41e0-cd01-03f4a9ce7f00/128`,
      imgAlt: "3x3 Rubik's Cube r Notation",
      description:
        'For any lowercase letter, it is turning two layers instead of one. The direction is the same as the notations above.',
    },
  ];

  constructor() {}
}
