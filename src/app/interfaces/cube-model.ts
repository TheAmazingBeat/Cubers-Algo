import { Move } from './notations';

type Color = 'green' | 'white' | 'orange' | 'red' | 'blue' | 'yellow';

/**
 * F:                       F':
 * green.frontSlice         green.frontprimeSlice
 * white.downSlice          white.downprimeSlice
 * orange.rightSlice        orange.rightprimeSlice
 * red.leftSlice            red.leftprimeSlice
 * blue.nothing             blue.nothing
 * yellow.upSlice           yellow.upprimeSlice
 *
 * B:                       B':
 * green.nothing            green.nothing
 * white.upSlice            white.upprimeSlice
 * orange.leftSlice         orange.leftprimeSlice
 * red.rightSlice           red.rightprimeSlice
 * blue.backSlice           blue.backprimeSlice
 * yellow.downprimeSlice    yellow.downSlice
 *
 * R:                       R':
 * green.rightSlice         green.rightprimeSlice
 * white.rightSlice         white.rightprimeSlice
 * orange.nothing           orange.nothing
 * red.frontSlice           red.frontprimeSlice
 * blue.leftSlice           blue.leftprimeSlice
 * yellow.rightSlice        yellow.rightprimeSlice
 *
 * L:                       L':
 * green.leftSlice          green.leftprimeSlice
 * white.leftSlice          white.leftprimeSlice
 * orange.frontSlice        orange.frontprimeSlice
 * red.nothing              red.nothing
 * blue.rightSlice          blue.rightPrimeSlice
 * yellow.leftSlice         yellow.leftprimeSlice
 *
 * U:                       U':
 * green.upSlice            green.upprimeSlice
 * white.frontSlice         white.frontprimeSlice
 * orange.upSlice           orange.upprimeSlice
 * red.upSlice              red.upprimeSlice
 * blue.upSlice             blue.upprimeSlice
 * yellow.nothing           yellow.nothing
 *
 * D:                       D':
 * green.downSlice          green.downprimeSlice
 * white.nothing            white.nothing
 * orange.downSlice         orange.downprimeSlice
 * red.downSlice            red.downprimeSlice
 * blue.downSlice           blue.downprimeSlice
 * yellow.frontSlice        yellow.frontprimeSlice
 *
 */

class Piece {
  id: number;
  color: Color;
  x: number;
  y: number;
  size: number;
  currentCenter: Center;

  constructor(
    id: number,
    color: Color,
    startX: number,
    startY: number,
    size: number,
    currentCenter?: Center
  ) {
    this.id = id;
    this.color = color;
    this.x = startX;
    this.y = startY;
    this.size = size;
    if (!currentCenter) currentCenter = this;
    this.currentCenter = currentCenter;
  }

  draw(ctx: CanvasRenderingContext2D, id?: number) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.lineWidth = 2;
    ctx.strokeRect(this.x, this.y, this.size, this.size);
    // if(!id) return;
    if (!this.id) return;
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    if (this.id < 10)
      ctx.fillText(this.id.toString(), this.x + this.size / 3, this.y + 22);
    else
      ctx.fillText(this.id.toString(), this.x + this.size / 3 - 5, this.y + 22);
  }
}

class EdgePiece extends Piece {
  constructor(
    id: number,
    color: Color,
    startX: number,
    startY: number,
    size: number,
    currentCenter: Center
  ) {
    super(id, color, startX, startY, size, currentCenter);
  }
}

class CornerPiece extends Piece {
  constructor(
    id: number,
    color: Color,
    startX: number,
    startY: number,
    pieceSize: number,
    currentCenter: Center
  ) {
    super(id, color, startX, startY, pieceSize, currentCenter);
  }
}

class Center extends Piece {
  constructor(
    id: number,
    color: Color,
    startX: number,
    startY: number,
    size: number
  ) {
    super(id, color, startX, startY, size);
  }
}

/**
 * For each piece:
 * - F:
 *  - if currentCenter is green, move to green
 *  - if currentCenter is white, move to red
 *  - if currentCenter is orange, move to white
 *  - if currentCenter is red, move to yellow
 *  - if currentCenter is blue, nothing
 *  - if currentCenter is yellow, move to orange
 */

/**
 * Pieces order:
 * 0 1 2
 * 3 4 5
 * 6 7 8
 */
class Side {
  pieces: Piece[];
  center: Center;
  start: { x: number; y: number };
  pieceSize: number;
  sideSize: number;

  TOPLEFT: { x: number; y: number };
  TOPCENTER: { x: number; y: number };
  TOPRIGHT: { x: number; y: number };
  MIDDLELEFT: { x: number; y: number };
  MIDDLECENTER: { x: number; y: number };
  MIDDLERIGHT: { x: number; y: number };
  BOTTOMLEFT: { x: number; y: number };
  BOTTOMCENTER: { x: number; y: number };
  BOTTOMRIGHT: { x: number; y: number };

  moved: number[];
  idStart: number;

  constructor(
    color: Color,
    startX: number,
    startY: number,
    pieceSize: number,
    sideSize: number,
    idStart: number
  ) {
    this.start = { x: startX, y: startY };
    this.pieceSize = pieceSize;
    this.sideSize = sideSize;

    this.TOPLEFT = { x: startX, y: startY };
    this.TOPCENTER = { x: startX + pieceSize, y: startY };
    this.TOPRIGHT = { x: startX + pieceSize * 2, y: startY };
    this.MIDDLELEFT = { x: startX, y: startY + pieceSize };
    this.MIDDLECENTER = { x: startX + pieceSize, y: startY + pieceSize };
    this.MIDDLERIGHT = { x: startX + pieceSize * 2, y: startY + pieceSize };
    this.BOTTOMLEFT = { x: startX, y: startY + pieceSize * 2 };
    this.BOTTOMCENTER = { x: startX + pieceSize, y: startY + pieceSize * 2 };
    this.BOTTOMRIGHT = { x: startX + pieceSize * 2, y: startY + pieceSize * 2 };

    this.moved = [];
    this.idStart = idStart;

    this.center = new Center(
      idStart + 5,
      color,
      this.MIDDLECENTER.x,
      this.MIDDLECENTER.y,
      pieceSize
    );
    this.pieces = [
      new CornerPiece(
        idStart + 1,
        color,
        this.TOPLEFT.x,
        this.TOPLEFT.y,
        pieceSize,
        this.center
      ),
      new EdgePiece(
        idStart + 2,
        color,
        this.TOPCENTER.x,
        this.TOPCENTER.y,
        pieceSize,
        this.center
      ),
      new CornerPiece(
        idStart + 3,
        color,
        this.TOPRIGHT.x,
        this.TOPRIGHT.y,
        pieceSize,
        this.center
      ),
      new EdgePiece(
        idStart + 4,
        color,
        this.MIDDLELEFT.x,
        this.MIDDLELEFT.y,
        pieceSize,
        this.center
      ),
      this.center,
      new EdgePiece(
        idStart + 6,
        color,
        this.MIDDLERIGHT.x,
        this.MIDDLERIGHT.y,
        pieceSize,
        this.center
      ),
      new CornerPiece(
        idStart + 7,
        color,
        this.BOTTOMLEFT.x,
        this.BOTTOMLEFT.y,
        pieceSize,
        this.center
      ),
      new EdgePiece(
        idStart + 8,
        color,
        this.BOTTOMCENTER.x,
        this.BOTTOMCENTER.y,
        pieceSize,
        this.center
      ),
      new CornerPiece(
        idStart + 9,
        color,
        this.BOTTOMRIGHT.x,
        this.BOTTOMRIGHT.y,
        pieceSize,
        this.center
      ),
    ];
  }

  // Find a piece in a certain location that has not been moved
  findPiece(x: number, y: number) {
    const piece: Piece | undefined = this.pieces.find(
      (p) => p.x === x && p.y === y && !this.moved.includes(p.id)
    );
    if (!piece) throw new Error('Piece not found');
    return piece;
  }

  insertPieces(newPieces?: Piece[]) {
    if (!newPieces) return;
    for (let i = newPieces.length - 1; i >= 0; i--) {
      this.pieces.splice(newPieces[i].id - 1, 0, newPieces[i]);
    }
  }

  findTargetSide(sides: Side[], color: Color) {
    const targetSide = sides.find((s) => s.center.color === color);
    if (!targetSide) throw new Error('Target side not found');
    return targetSide;
  }

  frontSlice(newPieces: Piece[]) {
    this.moved = [];
    // Top
    const topLeft = this.findPiece(this.TOPLEFT.x, this.TOPLEFT.y);
    const topCenter = this.findPiece(this.TOPCENTER.x, this.TOPCENTER.y);
    const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);
    topLeft.x = this.TOPRIGHT.x;
    topLeft.y = this.TOPRIGHT.y;
    topCenter.x = this.MIDDLERIGHT.x;
    topCenter.y = this.MIDDLERIGHT.y;
    topRight.x = this.BOTTOMRIGHT.x;
    topRight.y = this.BOTTOMRIGHT.y;
    this.moved.push(topLeft.id, topCenter.id, topRight.id);

    // Middle
    const middleLeft = this.findPiece(this.MIDDLELEFT.x, this.MIDDLELEFT.y);
    const middleRight = this.findPiece(this.MIDDLERIGHT.x, this.MIDDLERIGHT.y);
    middleLeft.x = this.TOPCENTER.x;
    middleLeft.y = this.TOPCENTER.y;
    middleRight.x = this.BOTTOMCENTER.x;
    middleRight.y = this.BOTTOMCENTER.y;
    this.moved.push(middleLeft.id, middleRight.id);

    // // Bottom
    const bottomLeft = this.findPiece(this.BOTTOMLEFT.x, this.BOTTOMLEFT.y);
    const bottomCenter = this.findPiece(
      this.BOTTOMCENTER.x,
      this.BOTTOMCENTER.y
    );
    const bottomRight = this.findPiece(this.BOTTOMRIGHT.x, this.BOTTOMRIGHT.y);
    bottomLeft.x = this.TOPLEFT.x;
    bottomLeft.y = this.TOPLEFT.y;
    bottomCenter.x = this.MIDDLELEFT.x;
    bottomCenter.y = this.MIDDLELEFT.y;
    bottomRight.x = this.BOTTOMLEFT.x;
    bottomRight.y = this.BOTTOMLEFT.y;
    this.moved.push(bottomLeft.id, bottomCenter.id, bottomRight.id);
    return [];
  }
  frontprimeSlice(newPieces: Piece[]) {
    this.moved = [];
    // Top
    const topLeft = this.findPiece(this.TOPLEFT.x, this.TOPLEFT.y);
    const topCenter = this.findPiece(this.TOPCENTER.x, this.TOPCENTER.y);
    const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);

    topLeft.x = this.BOTTOMLEFT.x;
    topLeft.y = this.BOTTOMLEFT.y;
    topCenter.x = this.MIDDLELEFT.x;
    topCenter.y = this.MIDDLELEFT.y;
    topRight.x = this.TOPLEFT.x;
    topRight.y = this.TOPLEFT.y;
    this.moved.push(topLeft.id, topCenter.id, topRight.id);

    // Middle
    const middleLeft = this.findPiece(this.MIDDLELEFT.x, this.MIDDLELEFT.y);
    const middleRight = this.findPiece(this.MIDDLERIGHT.x, this.MIDDLERIGHT.y);
    middleLeft.x = this.BOTTOMCENTER.x;
    middleLeft.y = this.BOTTOMCENTER.y;
    middleRight.x = this.TOPCENTER.x;
    middleRight.y = this.TOPCENTER.y;
    this.moved.push(middleLeft.id, middleRight.id);

    // Bottom
    const bottomLeft = this.findPiece(this.BOTTOMLEFT.x, this.BOTTOMLEFT.y);
    const bottomCenter = this.findPiece(
      this.BOTTOMCENTER.x,
      this.BOTTOMCENTER.y
    );
    const bottomRight = this.findPiece(this.BOTTOMRIGHT.x, this.BOTTOMRIGHT.y);
    bottomLeft.x = this.BOTTOMRIGHT.x;
    bottomLeft.y = this.BOTTOMRIGHT.y;
    bottomCenter.x = this.MIDDLERIGHT.x;
    bottomCenter.y = this.MIDDLERIGHT.y;
    bottomRight.x = this.TOPRIGHT.x;
    bottomRight.y = this.TOPRIGHT.y;

    this.moved.push(bottomLeft.id, bottomCenter.id, bottomRight.id);
    return [];
  }

  backSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    return [];
  }
  backprimeSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    return [];
  }

  rightSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (this.center.color === 'orange') {
      const targetSide = this.findTargetSide(sides, 'white');

      // Top
      const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);
      topRight.x = targetSide.BOTTOMRIGHT.x;
      topRight.y = targetSide.BOTTOMRIGHT.y;
      this.moved.push(topRight.id);
      // Middle
      const middleRight = this.findPiece(
        this.MIDDLERIGHT.x,
        this.MIDDLERIGHT.y
      );
      middleRight.x = targetSide.BOTTOMCENTER.x;
      middleRight.y = targetSide.BOTTOMCENTER.y;
      this.moved.push(middleRight.id);
      // Bottom
      const bottomRight = this.findPiece(
        this.BOTTOMRIGHT.x,
        this.BOTTOMRIGHT.y
      );
      bottomRight.x = targetSide.BOTTOMLEFT.x;
      bottomRight.y = targetSide.BOTTOMLEFT.y;
      this.moved.push(bottomRight.id);

      // Remove the moved pieces from the list of pieces
      this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
      this.insertPieces(newPieces);
      return [topRight, middleRight, bottomRight];
    }

    if (this.center.color === 'green') {
      const targetSide = this.findTargetSide(sides, 'white');

      // Top
      const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);
      topRight.x = targetSide.TOPRIGHT.x;
      topRight.y = targetSide.TOPRIGHT.y;
      this.moved.push(topRight.id);
      // Middle
      const middleRight = this.findPiece(
        this.MIDDLERIGHT.x,
        this.MIDDLERIGHT.y
      );
      middleRight.x = targetSide.MIDDLERIGHT.x;
      middleRight.y = targetSide.MIDDLERIGHT.y;
      this.moved.push(middleRight.id);
      // Bottom
      const bottomRight = this.findPiece(
        this.BOTTOMRIGHT.x,
        this.BOTTOMRIGHT.y
      );
      bottomRight.x = targetSide.BOTTOMRIGHT.x;
      bottomRight.y = targetSide.BOTTOMRIGHT.y;
      this.moved.push(bottomRight.id);
      // Remove the moved pieces from the list of pieces
      this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
      this.insertPieces(newPieces);

      return [topRight, middleRight, bottomRight];
    }

    if (this.center.color === 'white') {
      const targetSide = this.findTargetSide(sides, 'blue');

      // Top
      const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);
      const middleRight = this.findPiece(
        this.MIDDLERIGHT.x,
        this.MIDDLERIGHT.y
      );
      const bottomRight = this.findPiece(
        this.BOTTOMRIGHT.x,
        this.BOTTOMRIGHT.y
      );

      topRight.x = targetSide.BOTTOMLEFT.x;
      topRight.y = targetSide.BOTTOMLEFT.y;
      middleRight.x = targetSide.MIDDLELEFT.x;
      middleRight.y = targetSide.MIDDLELEFT.y;
      bottomRight.x = targetSide.TOPLEFT.x;
      bottomRight.y = targetSide.TOPLEFT.y;

      this.moved.push(topRight.id, middleRight.id, bottomRight.id);
      // Remove the moved pieces from the list of pieces
      this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
      this.insertPieces(newPieces);
      return [topRight, middleRight, bottomRight];
    }

    if (this.center.color === 'yellow') {
      const targetSide = this.findTargetSide(sides, 'green');

      // Top
      const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);
      topRight.x = targetSide.TOPRIGHT.x;
      topRight.y = targetSide.TOPRIGHT.y;
      this.moved.push(topRight.id);
      // Middle
      const middleRight = this.findPiece(
        this.MIDDLERIGHT.x,
        this.MIDDLERIGHT.y
      );
      middleRight.x = targetSide.MIDDLERIGHT.x;
      middleRight.y = targetSide.MIDDLERIGHT.y;
      this.moved.push(middleRight.id);
      // Bottom
      const bottomRight = this.findPiece(
        this.BOTTOMRIGHT.x,
        this.BOTTOMRIGHT.y
      );
      bottomRight.x = targetSide.BOTTOMRIGHT.x;
      bottomRight.y = targetSide.BOTTOMRIGHT.y;
      this.moved.push(bottomRight.id);
      // Remove the moved pieces from the list of pieces
      this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
      this.insertPieces(newPieces);

      return [topRight, middleRight, bottomRight];
    }

    return [];
  }
  rightprimeSlice(newPieces?: Piece[], sides?: Side[]) {
    this.moved = [];
    return [];
  }

  leftSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (this.center.color === 'red') {
      const targetSide = this.findTargetSide(sides, 'yellow');

      // Top
      const topLeft = this.findPiece(this.TOPLEFT.x, this.TOPLEFT.y);
      topLeft.x = targetSide.TOPRIGHT.x;
      topLeft.y = targetSide.TOPRIGHT.y;
      this.moved.push(topLeft.id);
      // Middle
      const middleLeft = this.findPiece(this.MIDDLELEFT.x, this.MIDDLELEFT.y);
      middleLeft.x = targetSide.TOPCENTER.x;
      middleLeft.y = targetSide.TOPCENTER.y;
      this.moved.push(middleLeft.id);
      // Bottom
      const bottomLeft = this.findPiece(this.BOTTOMLEFT.x, this.BOTTOMLEFT.y);
      bottomLeft.x = targetSide.TOPLEFT.x;
      bottomLeft.y = targetSide.TOPLEFT.y;
      this.moved.push(bottomLeft.id);
      // Remove the moved pieces from the list of pieces
      this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
      this.insertPieces(newPieces);

      return [topLeft, middleLeft, bottomLeft];
    }

    if (this.center.color === 'blue') {
      const targetSide = this.findTargetSide(sides, 'yellow');

      // Top
      const topLeft = this.findPiece(this.TOPLEFT.x, this.TOPLEFT.y);
      topLeft.x = targetSide.BOTTOMRIGHT.x;
      topLeft.y = targetSide.BOTTOMRIGHT.y;
      this.moved.push(topLeft.id);
      // Middle
      const middleLeft = this.findPiece(this.MIDDLELEFT.x, this.MIDDLELEFT.y);
      middleLeft.x = targetSide.MIDDLERIGHT.x;
      middleLeft.y = targetSide.MIDDLERIGHT.y;
      this.moved.push(middleLeft.id);
      // Bottom
      const bottomLeft = this.findPiece(this.BOTTOMLEFT.x, this.BOTTOMLEFT.y);
      bottomLeft.x = targetSide.TOPRIGHT.x;
      bottomLeft.y = targetSide.TOPRIGHT.y;
      this.moved.push(bottomLeft.id);
      // Remove the moved pieces from the list of pieces
      this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
      this.insertPieces(newPieces);

      return [topLeft, middleLeft, bottomLeft];
    }
    return [];
  }
  leftprimeSlice(newPieces?: Piece[], sides?: Side[]) {
    this.moved = [];
    return [];
  }

  upSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (this.center.color === 'yellow') {
      const targetSide = this.findTargetSide(sides, 'orange');

      // Top
      const topLeft = this.findPiece(this.TOPLEFT.x, this.TOPLEFT.y);
      const topMiddle = this.findPiece(this.TOPCENTER.x, this.TOPCENTER.y);
      const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);

      topLeft.x = targetSide.TOPRIGHT.x;
      topLeft.y = targetSide.TOPRIGHT.y;
      topMiddle.x = targetSide.MIDDLERIGHT.x;
      topMiddle.y = targetSide.MIDDLERIGHT.y;
      topRight.x = targetSide.BOTTOMRIGHT.x;
      topRight.y = targetSide.BOTTOMRIGHT.y;

      this.moved.push(topLeft.id, topMiddle.id, topRight.id);
      // Remove the moved pieces from the list of pieces
      this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
      this.insertPieces(newPieces);
      return [topLeft, topMiddle, topRight];
    }
    return [];
  }
  upprimeSlice(newPieces?: Piece[], sides?: Side[]) {
    this.moved = [];
    return [];
  }

  downSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (this.center.color === 'white') {
      const targetSide = this.findTargetSide(sides, 'red');

      // Bottom
      const bottomLeft = this.findPiece(this.BOTTOMLEFT.x, this.BOTTOMLEFT.y);
      const bottomCenter = this.findPiece(
        this.BOTTOMCENTER.x,
        this.BOTTOMCENTER.y
      );
      const bottomRight = this.findPiece(
        this.BOTTOMRIGHT.x,
        this.BOTTOMRIGHT.y
      );
      bottomLeft.x = targetSide.TOPLEFT.x;
      bottomLeft.y = targetSide.TOPLEFT.y;
      bottomCenter.x = targetSide.MIDDLELEFT.x;
      bottomCenter.y = targetSide.MIDDLELEFT.y;
      bottomRight.x = targetSide.BOTTOMLEFT.x;
      bottomRight.y = targetSide.BOTTOMLEFT.y;

      this.moved.push(bottomLeft.id, bottomCenter.id, bottomRight.id);
      // Remove the moved pieces from the list of pieces
      this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
      this.insertPieces(newPieces);
      return [bottomLeft, bottomCenter, bottomRight];
    }
    return [];
  }
  downprimeSlice(newPieces?: Piece[], sides?: Side[]) {
    this.moved = [];
    return [];
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.pieces.length; i++) {
      this.pieces[i].draw(ctx, i + 1);
    }
  }
}

// Green as Front, White as Up, Orange as Left, Yellow as Down, Red as Right, Blue as Back
export class ThreeCubeModel {
  green: Side;
  white: Side;
  orange: Side;
  yellow: Side;
  red: Side;
  blue: Side;
  pieceSize: number;
  sideSize: number;
  ctx: CanvasRenderingContext2D;
  canvasSize: { width: number; height: number };
  sides: Side[];

  constructor(
    ctx: CanvasRenderingContext2D,
    pieceSize: number = 30,
    sideSize: number = 90,
    canvasSize: { width: number; height: number }
  ) {
    this.ctx = ctx;
    this.pieceSize = pieceSize;
    this.sideSize = sideSize;
    this.canvasSize = canvasSize;

    this.green = new Side('green', sideSize, sideSize, pieceSize, sideSize, 0);
    this.white = new Side('white', sideSize, 0, pieceSize, sideSize, 10);
    this.orange = new Side('orange', 0, sideSize, pieceSize, sideSize, 20);
    this.yellow = new Side(
      'yellow',
      sideSize,
      sideSize * 2,
      pieceSize,
      sideSize,
      30
    );
    this.red = new Side('red', sideSize * 2, sideSize, pieceSize, sideSize, 40);
    this.blue = new Side(
      'blue',
      sideSize * 3,
      sideSize,
      pieceSize,
      sideSize,
      50
    );

    this.sides = [
      this.green,
      this.white,
      this.orange,
      this.yellow,
      this.red,
      this.blue,
    ];
  }

  frontSlice() {
    let returned: Piece[] = [];
    this.green.frontSlice(returned);
    returned = this.white.downSlice(returned, this.sides);
    returned = this.red.leftSlice(returned, this.sides);
    returned = this.yellow.upSlice(returned, this.sides);
    returned = this.orange.rightSlice(returned, this.sides);
    this.white.insertPieces(returned);
    // this.blue.nothing();
    this.draw();
  }
  frontprimeSlice() {
    let returned: Piece[] = [];
    this.green.frontprimeSlice(returned);
    returned = this.white.downprimeSlice(returned, this.sides);
    returned = this.red.leftprimeSlice(returned, this.sides);
    returned = this.yellow.upprimeSlice(returned, this.sides);
    returned = this.orange.rightprimeSlice(returned, this.sides);
    this.white.insertPieces(returned);
    // this.blue.nothing();
    this.draw();
  }

  backSlice() {
    let returned: Piece[] = [];
    // this.green.nothing()
    returned = this.white.upSlice(returned, this.sides);
    returned = this.orange.leftSlice(returned, this.sides);
    returned = this.red.rightSlice(returned, this.sides);
    returned = this.blue.backSlice(returned, this.sides);
    returned = this.yellow.downprimeSlice(returned, this.sides);
    this.draw();
  }
  backprimeSlice() {
    let returned: Piece[] = [];
    // this.green.nothing()
    returned = this.white.upprimeSlice(returned, this.sides);
    returned = this.orange.leftprimeSlice(returned, this.sides);
    returned = this.red.rightprimeSlice(returned, this.sides);
    returned = this.blue.backprimeSlice(returned, this.sides);
    returned = this.yellow.downSlice(returned, this.sides);
    this.draw();
  }

  rightSlice() {
    let returned: Piece[] = [];
    returned = this.red.frontSlice(returned);
    returned = this.green.rightSlice(returned, this.sides);
    returned = this.white.rightSlice(returned, this.sides);
    returned = this.blue.leftSlice(returned, this.sides);
    returned = this.yellow.rightSlice(returned, this.sides);
    // this.orange.nothing()
    this.green.insertPieces(returned);
    this.draw();
  }
  rightprimeSlice() {
    let returned: Piece[] = [];
    returned = this.green.rightprimeSlice(returned, this.sides);
    returned = this.white.rightprimeSlice(returned, this.sides);
    // this.orange.nothing()
    returned = this.red.frontprimeSlice(returned);
    returned = this.blue.leftprimeSlice(returned, this.sides);
    returned = this.yellow.rightprimeSlice(returned, this.sides);
    this.draw();
  }

  leftSlice() {
    let returned: Piece[] = [];
    returned = this.green.leftSlice(returned, this.sides);
    returned = this.white.leftSlice(returned, this.sides);
    returned = this.orange.frontSlice(returned);
    // this.red.nothing()
    returned = this.blue.rightSlice(returned, this.sides);
    returned = this.yellow.leftSlice(returned, this.sides);
    this.draw();
  }
  leftprimeSlice() {
    let returned: Piece[] = [];
    returned = this.green.leftprimeSlice(returned, this.sides);
    returned = this.white.leftprimeSlice(returned, this.sides);
    returned = this.orange.frontprimeSlice(returned);
    // this.red.nothing()
    returned = this.blue.rightprimeSlice(returned, this.sides);
    returned = this.yellow.leftprimeSlice(returned, this.sides);
  }

  upSlice() {
    let returned: Piece[] = [];
    returned = this.green.upSlice(returned, this.sides);
    returned = this.white.frontSlice(returned);
    returned = this.orange.upSlice(returned, this.sides);
    returned = this.red.upSlice(returned, this.sides);
    returned = this.blue.upSlice(returned, this.sides);
    // this.yellow.nothing()
    this.draw();
  }
  upprimeSlice() {
    let returned: Piece[] = [];
    returned = this.green.upprimeSlice(returned, this.sides);
    returned = this.white.frontprimeSlice(returned);
    returned = this.orange.upprimeSlice(returned, this.sides);
    returned = this.red.upprimeSlice(returned, this.sides);
    returned = this.blue.upprimeSlice(returned, this.sides);
    // this.yellow.nothing()
    this.draw();
  }

  downSlice() {
    let returned: Piece[] = [];
    returned = this.green.downSlice(returned, this.sides);
    // this.white.nothing()
    returned = this.orange.downSlice(returned, this.sides);
    returned = this.red.downSlice(returned, this.sides);
    returned = this.blue.downSlice(returned, this.sides);
    returned = this.yellow.frontSlice(returned);
    this.draw();
  }
  downprimeSlice() {
    let returned: Piece[] = [];
    returned = this.green.downprimeSlice(returned, this.sides);
    // this.white.nothing()
    returned = this.orange.downprimeSlice(returned, this.sides);
    returned = this.red.downprimeSlice(returned, this.sides);
    returned = this.blue.downprimeSlice(returned, this.sides);
    returned = this.yellow.frontprimeSlice(returned);
    this.draw();
  }

  draw() {
    this.green.draw(this.ctx);
    this.white.draw(this.ctx);
    this.orange.draw(this.ctx);
    this.yellow.draw(this.ctx);
    this.red.draw(this.ctx);
    this.blue.draw(this.ctx);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
  }

  slice(move: Move) {
    this.clear();
    switch (move) {
      case 'F':
        this.frontSlice();
        break;
      case "F'":
        this.frontprimeSlice();
        break;
      case 'F2':
        this.frontSlice();
        this.frontSlice();
        break;
      case 'B':
        this.backSlice();
        break;
      case "B'":
        this.backprimeSlice();
        break;
      case 'B2':
        this.backSlice();
        this.backSlice();
        break;
      case 'R':
        this.rightSlice();
        break;
      case "R'":
        this.rightprimeSlice();
        break;
      case 'R2':
        this.rightSlice();
        this.rightSlice();
        break;
      case 'L':
        this.leftSlice();
        break;
      case "L'":
        this.leftprimeSlice();
        break;
      case 'L2':
        this.leftSlice();
        this.leftSlice();
        break;
      case 'U':
        this.upSlice();
        break;
      case "U'":
        this.upprimeSlice();
        break;
      case 'U2':
        this.upSlice();
        this.upSlice();
        break;
      case 'D':
        this.downSlice();
        break;
      case "D'":
        this.downprimeSlice();
        break;
      case 'D2':
        this.downSlice();
        this.downSlice();
        break;
    }
  }
}
