import p5 from "p5";

export class Sand {
  private _position: p5.Vector;
  private readonly _size_h: number;
  private readonly _size_w: number;
  _speed: p5.Vector;
  _acceleration: p5.Vector;
  _sand: boolean = false;
  _c_number: number;
  _r_number: number;
  constructor(
    position: typeof this._position,
    size_w: number,
    size_h: number,
    r: number,
    c: number,
    p5: p5
  ) {
    this._position = position;
    this._size_h = size_h;
    this._size_w = size_w;
    this._speed = p5.createVector(0, 0.5);
    this._acceleration = p5.createVector(0, 2);
    this._c_number = c;
    this._r_number = r;
  }

  draw(p5: p5) {
    p5.push();
    p5.rectMode(p5.CENTER);
    p5.noStroke();
    !this._sand ? p5.fill(0) : p5.fill(255);
    p5.rect(this._position.x, this._position.y, this._size_w, this._size_h);
    p5.pop();
  }
  get position() {
    return this._position;
  }

  drop_sand(max_row: number, max_col: number, others: this[][]) {
    if (this._sand) {
      //if no sand underneath
        if (
          this._r_number + 1 < max_row &&
          !others[this._r_number + 1][this._c_number]._sand
        ) {
          this._sand = false;
          others[this._r_number + 1][this._c_number]._sand = true;
        } else if (
          this._r_number + 1 < max_row &&
          others[this._r_number + 1][this._c_number]._sand
        ) {
          //sand is underneath check left and right
          if (
            this._c_number - 1 >= 0 &&
            this._c_number + 1 < max_col &&
            !others[this._r_number + 1][this._c_number - 1]._sand &&
            !others[this._r_number + 1][this._c_number + 1]._sand
          ) {
            // if all are bottom left or right
            this._sand = false;
            others[this._r_number + 1][
              [this._c_number - 1, this._c_number + 1][
                Math.floor(Math.random() * 2)
              ]
            ]._sand = true;
          } else if (
            this._c_number - 1 >= 0 &&
            !others[this._r_number + 1][this._c_number - 1]._sand
          ) {
            //bottom left single search
            this._sand = false;
            others[this._r_number + 1][this._c_number - 1]._sand = true;
          } else if (
            this._c_number + 1 < max_col &&
            !others[this._r_number + 1][this._c_number + 1]._sand
          ) {
            //bottom right single search
            this._sand = false;
            others[this._r_number + 1][this._c_number + 1]._sand = true;
          }
      }
    }
    return this
  }
}
