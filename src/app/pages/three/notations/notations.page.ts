import { Component } from '@angular/core';
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
      imgSrc: 'assets/notations/three-R.png',
      imgAlt: "3x3 Rubik's Cube R Notation",
      description:
        'Turn the right side of the cube up. If you put the right side in front of you, it is turned clockwise.',
    },
    {
      notation: "R'",
      imgSrc: "assets/notations/three-R'.png",
      imgAlt: "3x3 Rubik's Cube R' Notation",
      description:
        'Turn the right side of the cube down. If you put the right side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'L',
      imgSrc: 'assets/notations/three-L.png',
      imgAlt: "3x3 Rubik's Cube L Notation",
      description:
        'Turn the left side of the cube up. If you put the left side in front of you, it is turned clockwise.',
    },
    {
      notation: "L'",
      imgSrc: "assets/notations/three-L'.png",
      imgAlt: "3x3 Rubik's Cube L' Notation",
      description:
        'Turn the left side of the cube down. If you put the left side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'U',
      imgSrc: 'assets/notations/three-U.png',
      imgAlt: "3x3 Rubik's Cube U Notation",
      description:
        'Turn the top side of the cube to the left. If you put the top side in front of you, it is turned clockwise.',
    },
    {
      notation: "U'",
      imgSrc: "assets/notations/three-U'.png",
      imgAlt: "3x3 Rubik's Cube U' Notation",
      description:
        'Turn the top side of the cube to the right. If you put the top side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'D',
      imgSrc: 'assets/notations/three-D.png',
      imgAlt: "3x3 Rubik's Cube D Notation",
      description:
        'Turn the bottom side of the cube to the right. If you put the bottom side in front of you, it is turned clockwise.',
    },
    {
      notation: "D'",
      imgSrc: "assets/notations/three-D'.png",
      imgAlt: "3x3 Rubik's Cube D' Notation",
      description:
        'Turn the bottom side of the cube to the left. If you put the bottom side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'F',
      imgSrc: 'assets/notations/three-F.png',
      imgAlt: "3x3 Rubik's Cube F Notation",
      description:
        'Turn the front side of the cube to the right. If you put the front side in front of you, it is turned clockwise.',
    },
    {
      notation: "F'",
      imgSrc: "assets/notations/three-F'.png",
      imgAlt: "3x3 Rubik's Cube F' Notation",
      description:
        'Turn the front side of the cube to the left. If you put the front side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'B',
      imgSrc: 'assets/notations/three-B.png',
      imgAlt: "3x3 Rubik's Cube B Notation",
      description:
        'Turn the back side of the cube clockwise. If you put the back side in front of you, it is turned clockwise.',
    },
    {
      notation: "B'",
      imgSrc: "assets/notations/three-B'.png",
      imgAlt: "3x3 Rubik's Cube B' Notation",
      description:
        'Turn the back side of the cube counterclockwise. If you put the back side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'x',
      imgSrc: 'assets/notations/three-x.png',
      imgAlt: "3x3 Rubik's Cube x Notation",
      description:
        'Imagine there is an x axis across the middle of the cube. Turn the whole cube upwards from that imaginary axis. If you look at the right side of the cube, the whole cube is turned clockwise.',
    },
    {
      notation: "x'",
      imgSrc: "assets/notations/three-x'.png",
      imgAlt: "3x3 Rubik's Cube x' Notation",
      description:
        'Imagine there is an x axis across the middle of the cube. Turn the whole cube downwards from that imaginary axis. If you look at the right side of the cube, the whole cube is turned counterclockwise.',
    },
    {
      notation: 'y',
      imgSrc: 'assets/notations/three-y.png',
      imgAlt: "3x3 Rubik's Cube y Notation",
      description:
        'Imagine there is a y axis across the middle of the cube. Turn the whole cube to the left from that imaginary axis. If you look at the top side of the cube, the whole cube is turned clockwise.',
    },
    {
      notation: "y'",
      imgSrc: "assets/notations/three-y'.png",
      imgAlt: "3x3 Rubik's Cube y' Notation",
      description:
        'Imagine there is a y axis across the middle of the cube. Turn the whole cube to the right from that imaginary axis. If you look at the top side of the cube, the whole cube is turned counterclockwise.',
    },
    {
      notation: 'M',
      imgSrc: 'assets/notations/three-M.png',
      imgAlt: "3x3 Rubik's Cube M Notation",
      description: 'Turn the middle layer downwards.',
    },
    {
      notation: "M'",
      imgSrc: "assets/notations/three-M'.png",
      imgAlt: "3x3 Rubik's Cube M' Notation",
      description: 'Turn the middle layer upwards.',
    },
    {
      notation: 'r, l, u, d, f, b',
      imgSrc: 'assets/notations/three-lowercase.png',
      imgAlt: "3x3 Rubik's Cube Lowercase Notation",
      description:
        'For any lowercase letter, it is turning two layers instead of one. The direction is the same as the notations above.',
    },
  ];

  constructor() {}
}
