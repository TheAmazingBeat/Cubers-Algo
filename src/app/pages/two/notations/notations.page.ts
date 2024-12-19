import { Component } from '@angular/core';
import { Notation } from 'src/app/interfaces/notations';

@Component({
  selector: 'app-notations',
  templateUrl: './notations.page.html',
  styleUrls: ['./notations.page.scss'],
})
export class NotationsPage {
  notations: Notation[] = [
    {
      notation: 'R',
      imgSrc: 'assets/notations/two-R.png',
      imgAlt: "2x2 Rubik's Cube R Notation",
      description:
        'Turn the right side of the cube up. If you put the right side in front of you, it is turned clockwise.',
    },
    {
      notation: "R'",
      imgSrc: "assets/notations/two-R'.png",
      imgAlt: "2x2 Rubik's Cube R' Notation",
      description:
        'Turn the right side of the cube down. If you put the right side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'L',
      imgSrc: 'assets/notations/two-L.png',
      imgAlt: "2x2 Rubik's Cube L Notation",
      description:
        'Turn the left side of the cube up. If you put the left side in front of you, it is turned clockwise.',
    },
    {
      notation: "L'",
      imgSrc: "assets/notations/two-L'.png",
      imgAlt: "2x2 Rubik's Cube L' Notation",
      description:
        'Turn the left side of the cube down. If you put the left side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'U',
      imgSrc: 'assets/notations/two-U.png',
      imgAlt: "2x2 Rubik's Cube U Notation",
      description:
        'Turn the top side of the cube to the left. If you put the top side in front of you, it is turned clockwise.',
    },
    {
      notation: "U'",
      imgSrc: "assets/notations/two-U'.png",
      imgAlt: "2x2 Rubik's Cube U' Notation",
      description:
        'Turn the top side of the cube to the right. If you put the top side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'D',
      imgSrc: 'assets/notations/two-D.png',
      imgAlt: "2x2 Rubik's Cube D Notation",
      description:
        'Turn the bottom side of the cube to the right. If you put the bottom side in front of you, it is turned clockwise.',
    },
    {
      notation: "D'",
      imgSrc: "assets/notations/two-D'.png",
      imgAlt: "2x2 Rubik's Cube D' Notation",
      description:
        'Turn the bottom side of the cube to the left. If you put the bottom side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'F',
      imgSrc: 'assets/notations/two-F.png',
      imgAlt: "2x2 Rubik's Cube F Notation",
      description:
        'Turn the front side of the cube up. If you put the front side in front of you, it is turned clockwise.',
    },
    {
      notation: "F'",
      imgSrc: "assets/notations/two-F'.png",
      imgAlt: "2x2 Rubik's Cube F' Notation",
      description:
        'Turn the front side of the cube down. If you put the front side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'B',
      imgSrc: 'assets/notations/two-B.png',
      imgAlt: "2x2 Rubik's Cube B Notation",
      description:
        'Turn the back side of the cube up. If you put the back side in front of you, it is turned clockwise.',
    },
    {
      notation: "B'",
      imgSrc: "assets/notations/two-B'.png",
      imgAlt: "2x2 Rubik's Cube B' Notation",
      description:
        'Turn the back side of the cube down. If you put the back side in front of you, it is turned counterclockwise.',
    },
    {
      notation: 'x',
      imgSrc: 'assets/notations/two-x.png',
      imgAlt: "2x2 Rubik's Cube x Notation",
      description:
        'Imagine there is an x axis across the middle of the cube. Turn the whole cube upwards from that imaginary axis. If you look at the right side of the cube, the whole cube is turned clockwise.',
    },
    {
      notation: "x'",
      imgSrc: "assets/notations/two-x'.png",
      imgAlt: "2x2 Rubik's Cube x' Notation",
      description:
        'Imagine there is an x axis across the middle of the cube. Turn the whole cube downwards from that imaginary axis. If you look at the right side of the cube, the whole cube is turned counterclockwise.',
    },
    {
      notation: 'y',
      imgSrc: 'assets/notations/two-y.png',
      imgAlt: "2x2 Rubik's Cube y Notation",
      description:
        'Imagine there is a y axis across the middle of the cube. Turn the whole cube to the right from that imaginary axis. If you look at the top side of the cube, the whole cube is turned clockwise.',
    },
    {
      notation: "y'",
      imgSrc: "assets/notations/two-y'.png",
      imgAlt: "2x2 Rubik's Cube y' Notation",
      description:
        'Imagine there is a y axis across the middle of the cube. Turn the whole cube to the left from that imaginary axis. If you look at the top side of the cube, the whole cube is turned counterclockwise.',
    }
  ];
}
