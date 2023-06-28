//defines a square of the grid

export class GridSquare {
    pigment: string
  
    constructor(pigment: string = '') {
      this.pigment = pigment
    }

    get color() {
        return this.pigment
    }
}
