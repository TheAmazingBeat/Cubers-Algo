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
 * blue.frontSlice          blue.frontprimeSlice
 * white.upSlice            white.upprimeSlice
 * orange.leftSlice         orange.leftprimeSlice
 * red.rightSlice           red.rightprimeSlice
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

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.lineWidth = 2;
    ctx.strokeRect(this.x, this.y, this.size, this.size);
    // if(!id) return;
    if (!this.id) return;
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    // if (this.id < 10)
    //   ctx.fillText(this.id.toString(), this.x + this.size / 3, this.y + 22);
    // else
    //   ctx.fillText(this.id.toString(), this.x + this.size / 3 - 5, this.y + 22);
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
  // leftCenter: Center | null = null;
  // rightCenter: Center | null = null;
  // upCenter: Center | null = null;
  // downCenter: Center | null = null;

  constructor(
    id: number,
    color: Color,
    startX: number,
    startY: number,
    size: number,
    leftCenter?: Center,
    rightCenter?: Center,
    upCenter?: Center,
    downCenter?: Center
  ) {
    super(id, color, startX, startY, size);
    // if (leftCenter && rightCenter && upCenter && downCenter) {
    //   this.leftCenter = leftCenter;
    //   this.rightCenter = rightCenter;
    //   this.upCenter = upCenter;
    //   this.downCenter = downCenter;
    // }
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
  //#region Properties
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

  leftSide: Side | null = null;
  rightSide: Side | null = null;
  upSide: Side | null = null;
  downSide: Side | null = null;

  moved: number[];
  idStart: number;
  //#endregion

  constructor(
    color: Color,
    startX: number,
    startY: number,
    pieceSize: number,
    sideSize: number,
    idStart: number,
    leftSide?: Side,
    rightSide?: Side,
    upSide?: Side,
    downSide?: Side
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

    if (leftSide && rightSide && upSide && downSide) {
      this.leftSide = leftSide;
      this.rightSide = rightSide;
      this.upSide = upSide;
      this.downSide = downSide;
    }

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

  udpateSides(leftSide: Side, rightSide: Side, upSide: Side, downSide: Side) {
    this.leftSide = leftSide;
    this.rightSide = rightSide;
    this.upSide = upSide;
    this.downSide = downSide;
  }

  //#region Utitily Methods
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
  //#endregion

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
    if (!this.upSide || !this.upSide.center) return [];
    // Side to move to
    const targetSide = this.findTargetSide(sides, this.upSide?.center.color);
    // Pieces to move
    const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);
    const middleRight = this.findPiece(this.MIDDLERIGHT.x, this.MIDDLERIGHT.y);
    const bottomRight = this.findPiece(this.BOTTOMRIGHT.x, this.BOTTOMRIGHT.y);

    // Move pieces
    if (this.center.color === 'green') {
      Object.assign(topRight, targetSide.TOPRIGHT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.MIDDLERIGHT);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'white') {
      Object.assign(topRight, targetSide.BOTTOMLEFT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.MIDDLELEFT);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.TOPLEFT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'orange') {
      Object.assign(topRight, targetSide.BOTTOMRIGHT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.BOTTOMCENTER);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.BOTTOMLEFT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'yellow') {
      Object.assign(topRight, targetSide.TOPRIGHT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.MIDDLERIGHT);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'red') {
      Object.assign(topRight, targetSide.TOPLEFT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.TOPCENTER);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.TOPRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'blue') {
      Object.assign(topRight, targetSide.BOTTOMLEFT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.MIDDLELEFT);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.TOPLEFT);
      this.moved.push(bottomRight.id);
    }

    this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
    this.insertPieces(newPieces);
    return [topRight, middleRight, bottomRight];
  }
  rightprimeSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (!this.downSide || !this.downSide.center) return [];
    // Side to move to
    const targetSide = this.findTargetSide(sides, this.downSide.center.color);
    // Pieces to move
    const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);
    const middleRight = this.findPiece(this.MIDDLERIGHT.x, this.MIDDLERIGHT.y);
    const bottomRight = this.findPiece(this.BOTTOMRIGHT.x, this.BOTTOMRIGHT.y);

    // Move pieces
    if (this.center.color === 'green') {
      Object.assign(topRight, targetSide.TOPRIGHT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.MIDDLERIGHT);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'white') {
      Object.assign(topRight, targetSide.TOPRIGHT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.MIDDLERIGHT);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'orange') {
      Object.assign(topRight, targetSide.TOPLEFT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.TOPCENTER);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.TOPRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'yellow') {
      Object.assign(topRight, targetSide.BOTTOMLEFT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.MIDDLELEFT);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.TOPLEFT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'red') {
      Object.assign(topRight, targetSide.BOTTOMLEFT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.BOTTOMCENTER);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'blue') {
      Object.assign(topRight, targetSide.BOTTOMLEFT);
      this.moved.push(topRight.id);
      Object.assign(middleRight, targetSide.MIDDLELEFT);
      this.moved.push(middleRight.id);
      Object.assign(bottomRight, targetSide.TOPLEFT);
      this.moved.push(bottomRight.id);
    }

    this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
    this.insertPieces(newPieces);

    return [topRight, middleRight, bottomRight];
  }

  leftSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (!this.downSide || !this.downSide.center) return [];
    // Side to move to
    const targetSide = this.findTargetSide(sides, this.downSide.center.color);
    // Pieces to move
    const topLeft = this.findPiece(this.TOPLEFT.x, this.TOPLEFT.y);
    const middleLeft = this.findPiece(this.MIDDLELEFT.x, this.MIDDLELEFT.y);
    const bottomLeft = this.findPiece(this.BOTTOMLEFT.x, this.BOTTOMLEFT.y);

    // Move pieces
    if (this.center.color === 'green') {
      Object.assign(topLeft, targetSide.TOPLEFT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.MIDDLELEFT);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.BOTTOMLEFT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'white') {
      Object.assign(topLeft, targetSide.TOPLEFT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.MIDDLELEFT);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.BOTTOMLEFT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'orange') {
      Object.assign(topLeft, targetSide.BOTTOMLEFT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.BOTTOMCENTER);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'yellow') {
      Object.assign(topLeft, targetSide.BOTTOMRIGHT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.MIDDLERIGHT);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.TOPRIGHT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'red') {
      Object.assign(topLeft, targetSide.TOPLEFT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.TOPCENTER);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.TOPRIGHT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'blue') {
      Object.assign(topLeft, targetSide.BOTTOMRIGHT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.MIDDLERIGHT);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.TOPRIGHT);
      this.moved.push(bottomLeft.id);
    }

    this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
    this.insertPieces(newPieces);

    return [topLeft, middleLeft, bottomLeft];
  }
  leftprimeSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (!this.upSide || !this.upSide.center) return [];
    // Side to move to
    const targetSide = this.findTargetSide(sides, this.upSide.center.color);
    // Pieces to move
    const topLeft = this.findPiece(this.TOPLEFT.x, this.TOPLEFT.y);
    const middleLeft = this.findPiece(this.MIDDLELEFT.x, this.MIDDLELEFT.y);
    const bottomLeft = this.findPiece(this.BOTTOMLEFT.x, this.BOTTOMLEFT.y);

    // Move pieces
    if (this.center.color === 'green') {
      Object.assign(topLeft, targetSide.TOPLEFT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.MIDDLELEFT);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.BOTTOMLEFT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'white') {
      Object.assign(topLeft, targetSide.BOTTOMRIGHT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.MIDDLERIGHT);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.TOPRIGHT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'orange') {
      Object.assign(topLeft, targetSide.TOPRIGHT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.TOPCENTER);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.TOPLEFT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'yellow') {
      Object.assign(topLeft, targetSide.TOPLEFT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.MIDDLELEFT);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.BOTTOMLEFT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'red') {
      Object.assign(topLeft, targetSide.BOTTOMLEFT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.BOTTOMCENTER);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomLeft.id);
    }
    if (this.center.color === 'blue') {
      Object.assign(topLeft, targetSide.BOTTOMRIGHT);
      this.moved.push(topLeft.id);
      Object.assign(middleLeft, targetSide.MIDDLERIGHT);
      this.moved.push(middleLeft.id);
      Object.assign(bottomLeft, targetSide.TOPRIGHT);
      this.moved.push(bottomLeft.id);
    }

    this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
    this.insertPieces(newPieces);

    return [topLeft, middleLeft, bottomLeft];
  }

  upSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (!this.leftSide || !this.leftSide.center) return [];
    // Side to move to
    const targetSide = this.findTargetSide(sides, this.leftSide.center.color);
    // Pieces to move
    const topLeft = this.findPiece(this.TOPLEFT.x, this.TOPLEFT.y);
    const topCenter = this.findPiece(this.TOPCENTER.x, this.TOPCENTER.y);
    const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);

    if (
      this.center.color === 'green' ||
      this.center.color === 'blue' ||
      this.center.color === 'red' ||
      this.center.color === 'orange'
    ) {
      Object.assign(topLeft, targetSide.TOPLEFT);
      this.moved.push(topLeft.id);
      Object.assign(topCenter, targetSide.TOPCENTER);
      this.moved.push(topCenter.id);
      Object.assign(topRight, targetSide.TOPRIGHT);
      this.moved.push(topRight.id);
    }
    if (this.center.color === 'white') {
      Object.assign(topLeft, targetSide.BOTTOMLEFT);
      this.moved.push(topLeft.id);
      Object.assign(topCenter, targetSide.MIDDLELEFT);
      this.moved.push(topCenter.id);
      Object.assign(topRight, targetSide.TOPLEFT);
      this.moved.push(topRight.id);
    }
    if (this.center.color === 'yellow') {
      Object.assign(topLeft, targetSide.TOPRIGHT);
      this.moved.push(topLeft.id);
      Object.assign(topCenter, targetSide.MIDDLERIGHT);
      this.moved.push(topCenter.id);
      Object.assign(topRight, targetSide.BOTTOMRIGHT);
      this.moved.push(topRight.id);
    }

    this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
    this.insertPieces(newPieces);

    return [topLeft, topCenter, topRight];
  }
  upprimeSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];

    if (!this.rightSide || !this.rightSide.center) return [];
    // Side to move to
    const targetSide = this.findTargetSide(sides, this.rightSide.center.color);
    // Pieces to move
    const topLeft = this.findPiece(this.TOPLEFT.x, this.TOPLEFT.y);
    const topCenter = this.findPiece(this.TOPCENTER.x, this.TOPCENTER.y);
    const topRight = this.findPiece(this.TOPRIGHT.x, this.TOPRIGHT.y);

    if (
      this.center.color === 'green' ||
      this.center.color === 'blue' ||
      this.center.color === 'red' ||
      this.center.color === 'orange'
    ) {
      Object.assign(topLeft, targetSide.TOPLEFT);
      this.moved.push(topLeft.id);
      Object.assign(topCenter, targetSide.TOPCENTER);
      this.moved.push(topCenter.id);
      Object.assign(topRight, targetSide.TOPRIGHT);
      this.moved.push(topRight.id);
    }
    if (this.center.color === 'white') {
      Object.assign(topLeft, targetSide.TOPRIGHT);
      this.moved.push(topLeft.id);
      Object.assign(topCenter, targetSide.MIDDLERIGHT);
      this.moved.push(topCenter.id);
      Object.assign(topRight, targetSide.BOTTOMRIGHT);
      this.moved.push(topRight.id);
    }
    if (this.center.color === 'yellow') {
      Object.assign(topLeft, targetSide.BOTTOMLEFT);
      this.moved.push(topLeft.id);
      Object.assign(topCenter, targetSide.MIDDLELEFT);
      this.moved.push(topCenter.id);
      Object.assign(topRight, targetSide.TOPLEFT);
      this.moved.push(topRight.id);
    }

    this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
    this.insertPieces(newPieces);

    return [topLeft, topCenter, topRight];
  }

  downSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (!this.rightSide || !this.rightSide.center) return [];
    // Side to move to
    const targetSide = this.findTargetSide(sides, this.rightSide.center.color);
    // Pieces to move
    const bottomLeft = this.findPiece(this.BOTTOMLEFT.x, this.BOTTOMLEFT.y);
    const bottomCenter = this.findPiece(
      this.BOTTOMCENTER.x,
      this.BOTTOMCENTER.y
    );
    const bottomRight = this.findPiece(this.BOTTOMRIGHT.x, this.BOTTOMRIGHT.y);

    if (
      this.center.color === 'green' ||
      this.center.color === 'blue' ||
      this.center.color === 'red' ||
      this.center.color === 'orange'
    ) {
      Object.assign(bottomLeft, targetSide.BOTTOMLEFT);
      this.moved.push(bottomLeft.id);
      Object.assign(bottomCenter, targetSide.BOTTOMCENTER);
      this.moved.push(bottomCenter.id);
      Object.assign(bottomRight, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'white') {
      Object.assign(bottomLeft, targetSide.TOPLEFT);
      this.moved.push(bottomLeft.id);
      Object.assign(bottomCenter, targetSide.MIDDLELEFT);
      this.moved.push(bottomCenter.id);
      Object.assign(bottomRight, targetSide.BOTTOMLEFT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'yellow') {
      Object.assign(bottomLeft, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomLeft.id);
      Object.assign(bottomCenter, targetSide.MIDDLERIGHT);
      this.moved.push(bottomCenter.id);
      Object.assign(bottomRight, targetSide.TOPRIGHT);
      this.moved.push(bottomRight.id);
    }

    this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
    this.insertPieces(newPieces);

    return [bottomLeft, bottomCenter, bottomRight];
  }
  downprimeSlice(newPieces: Piece[], sides: Side[]) {
    this.moved = [];
    if (!this.leftSide || !this.leftSide.center) return [];
    // Side to move to
    const targetSide = this.findTargetSide(sides, this.leftSide.center.color);
    // Pieces to move
    const bottomLeft = this.findPiece(this.BOTTOMLEFT.x, this.BOTTOMLEFT.y);
    const bottomCenter = this.findPiece(
      this.BOTTOMCENTER.x,
      this.BOTTOMCENTER.y
    );
    const bottomRight = this.findPiece(this.BOTTOMRIGHT.x, this.BOTTOMRIGHT.y);

    if (
      this.center.color === 'green' ||
      this.center.color === 'blue' ||
      this.center.color === 'red' ||
      this.center.color === 'orange'
    ) {
      Object.assign(bottomLeft, targetSide.BOTTOMLEFT);
      this.moved.push(bottomLeft.id);
      Object.assign(bottomCenter, targetSide.BOTTOMCENTER);
      this.moved.push(bottomCenter.id);
      Object.assign(bottomRight, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'white') {
      Object.assign(bottomLeft, targetSide.BOTTOMRIGHT);
      this.moved.push(bottomLeft.id);
      Object.assign(bottomCenter, targetSide.MIDDLERIGHT);
      this.moved.push(bottomCenter.id);
      Object.assign(bottomRight, targetSide.TOPRIGHT);
      this.moved.push(bottomRight.id);
    }
    if (this.center.color === 'yellow') {
      Object.assign(bottomLeft, targetSide.TOPLEFT);
      this.moved.push(bottomLeft.id);
      Object.assign(bottomCenter, targetSide.MIDDLELEFT);
      this.moved.push(bottomCenter.id);
      Object.assign(bottomRight, targetSide.BOTTOMLEFT);
      this.moved.push(bottomRight.id);
    }

    this.pieces = this.pieces.filter((p) => !this.moved.includes(p.id));
    this.insertPieces(newPieces);

    return [bottomLeft, bottomCenter, bottomRight];
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.pieces.length; i++) {
      this.pieces[i].draw(ctx);
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

    this.green = new Side(
      'green',
      sideSize + 5,
      sideSize + 5,
      pieceSize,
      sideSize,
      0
    );
    this.white = new Side('white', sideSize + 5, 0, pieceSize, sideSize, 10);
    this.orange = new Side('orange', 0, sideSize + 5, pieceSize, sideSize, 20);
    this.yellow = new Side(
      'yellow',
      sideSize + 5,
      sideSize * 2 + 5 * 2,
      pieceSize,
      sideSize,
      30
    );
    this.red = new Side(
      'red',
      sideSize * 2 + 5 * 2,
      sideSize + 5,
      pieceSize,
      sideSize,
      40
    );
    this.blue = new Side(
      'blue',
      sideSize * 3 + 5 * 3,
      sideSize + 5,
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

    this.green.udpateSides(this.orange, this.red, this.white, this.yellow);
    this.white.udpateSides(this.orange, this.red, this.blue, this.green);
    this.orange.udpateSides(this.blue, this.green, this.white, this.yellow);
    this.yellow.udpateSides(this.orange, this.red, this.green, this.blue);
    this.red.udpateSides(this.green, this.blue, this.white, this.yellow);
    this.blue.udpateSides(this.red, this.orange, this.white, this.yellow);
  }

  frontSlice() {
    let returned: Piece[] = [];
    returned = this.green.frontSlice(returned);
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
    returned = this.green.frontprimeSlice(returned);
    returned = this.white.downprimeSlice(returned, this.sides);
    returned = this.orange.rightprimeSlice(returned, this.sides);
    returned = this.yellow.upprimeSlice(returned, this.sides);
    returned = this.red.leftprimeSlice(returned, this.sides);
    this.white.insertPieces(returned);
    // this.blue.nothing();
    this.draw();
  }

  backSlice() {
    let returned: Piece[] = [];
    returned = this.blue.frontSlice(returned);
    returned = this.white.upSlice(returned, this.sides);
    returned = this.orange.leftSlice(returned, this.sides);
    returned = this.yellow.downSlice(returned, this.sides);
    returned = this.red.rightSlice(returned, this.sides);
    // this.green.nothing()
    this.white.insertPieces(returned);

    this.draw();
  }
  backprimeSlice() {
    let returned: Piece[] = [];
    returned = this.blue.frontprimeSlice(returned);
    returned = this.white.upprimeSlice(returned, this.sides);
    returned = this.red.rightprimeSlice(returned, this.sides);
    returned = this.yellow.downprimeSlice(returned, this.sides);
    returned = this.orange.leftprimeSlice(returned, this.sides);
    // this.green.nothing()
    this.white.insertPieces(returned);
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
    returned = this.red.frontprimeSlice(returned);
    returned = this.green.rightprimeSlice(returned, this.sides);
    returned = this.yellow.rightprimeSlice(returned, this.sides);
    returned = this.blue.leftprimeSlice(returned, this.sides);
    returned = this.white.rightprimeSlice(returned, this.sides);
    // this.orange.nothing()
    this.green.insertPieces(returned);
    this.draw();
  }

  leftSlice() {
    let returned: Piece[] = [];
    returned = this.orange.frontSlice(returned);
    returned = this.green.leftSlice(returned, this.sides);
    returned = this.yellow.leftSlice(returned, this.sides);
    returned = this.blue.rightSlice(returned, this.sides);
    returned = this.white.leftSlice(returned, this.sides);
    // this.red.nothing()
    this.green.insertPieces(returned);
    this.draw();
  }
  leftprimeSlice() {
    let returned: Piece[] = [];
    returned = this.orange.frontprimeSlice(returned);
    returned = this.green.leftprimeSlice(returned, this.sides);
    returned = this.white.leftprimeSlice(returned, this.sides);
    returned = this.blue.rightprimeSlice(returned, this.sides);
    returned = this.yellow.leftprimeSlice(returned, this.sides);
    this.green.insertPieces(returned);
    // this.red.nothing()
    this.draw();
  }

  upSlice() {
    let returned: Piece[] = [];
    returned = this.white.frontSlice(returned);
    returned = this.green.upSlice(returned, this.sides);
    returned = this.orange.upSlice(returned, this.sides);
    returned = this.blue.upSlice(returned, this.sides);
    returned = this.red.upSlice(returned, this.sides);
    // this.yellow.nothing()
    this.green.insertPieces(returned);
    this.draw();
  }
  upprimeSlice() {
    let returned: Piece[] = [];
    returned = this.white.frontprimeSlice(returned);
    returned = this.green.upprimeSlice(returned, this.sides);
    returned = this.red.upprimeSlice(returned, this.sides);
    returned = this.blue.upprimeSlice(returned, this.sides);
    returned = this.orange.upprimeSlice(returned, this.sides);
    // this.yellow.nothing()
    this.green.insertPieces(returned);
    this.draw();
  }

  downSlice() {
    let returned: Piece[] = [];
    returned = this.yellow.frontSlice(returned);
    returned = this.green.downSlice(returned, this.sides);
    returned = this.red.downSlice(returned, this.sides);
    returned = this.blue.downSlice(returned, this.sides);
    returned = this.orange.downSlice(returned, this.sides);
    // this.white.nothing()
    this.green.insertPieces(returned);
    this.draw();
  }
  downprimeSlice() {
    let returned: Piece[] = [];
    returned = this.yellow.frontprimeSlice(returned);
    returned = this.green.downprimeSlice(returned, this.sides);
    returned = this.orange.downprimeSlice(returned, this.sides);
    returned = this.blue.downprimeSlice(returned, this.sides);
    returned = this.red.downprimeSlice(returned, this.sides);
    // this.white.nothing()
    this.green.insertPieces(returned);
    this.draw();
  }

  draw() {
    this.green.draw(this.ctx);
    this.white.draw(this.ctx);
    this.orange.draw(this.ctx);
    this.yellow.draw(this.ctx);
    this.red.draw(this.ctx);
    this.blue.draw(this.ctx);
    this.ctx.save();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
  }

  scrambleCube(scramble?: Move[]) {
    if (!scramble) return;
    for (let i = 0; i < scramble.length; i++) {
      this.slice(scramble[i]);
    }
  }

  slice(move: Move) {
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
