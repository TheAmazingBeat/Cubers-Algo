export interface Notation {
    notation: string;
    imgSrc: string;
    imgAlt: string;
    description: string
}

export type Move =
  | 'R'
  | 'L'
  | 'U'
  | 'D'
  | 'F'
  | 'B'
  | "R'"
  | "L'"
  | "U'"
  | "D'"
  | "F'"
  | "B'"
  | 'R2'
  | 'L2'
  | 'U2'
  | 'D2'
  | 'F2'
  | 'B2';