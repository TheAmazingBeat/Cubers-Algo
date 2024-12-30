export interface Algo {
  name: string;
  sequences: string[];
  imgUrl: string;
  imgAlt: string;
  setupAlgo: string[]
  puzzleType: '3x3x3' | '2x2x2';
  simulationUrls?: string[];
}
