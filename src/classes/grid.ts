import p5 from "p5";
import { Sand } from "./sand";
import { loop } from "../utility/loop";

export class Grid {
  private readonly _n_rows: number;
  private readonly _n_cols: number;
  private readonly _size_h: number;
  private readonly _size_w: number;
  _grid: Sand[][];
  constructor(n_rows: number, n_cols: number, size_w: number, size_h: number) {
    this._size_h = size_h;
    this._size_w = size_w;
    this._n_cols = n_cols;
    this._n_rows = n_rows;
    this._grid = new Array(this._n_rows);

    for (let r = 0; r < this._n_rows; r++) {
      this._grid[r] = new Array(this._n_cols);
    }
  }

  createGrid(p5: p5) {
    let w_cell = this._size_w / this._n_cols;
    let h_cell = this._size_h / this._n_rows;
    for (let r = 0; r < this._n_rows; r++) {
      for (let c = 0; c < this._n_cols; c++) {
        this._grid[r][c] = new Sand(
          p5.createVector(c * w_cell + w_cell / 2, r * h_cell + h_cell / 2),
          w_cell,
          h_cell,
          r,
          c,
          p5
        );
      }
    }
    return this;
  }

  
  draw(p5: p5) {
    for (let r = 0; r < this._n_rows; r++) {
      for (let c = 0; c < this._n_cols; c++) {
        this._grid[r][c]
          .drop_sand(this._n_rows, this._n_cols, this._grid)
          .draw(p5);
      }
    }
  }
  findCellsWithMouseRadius(point: p5.Vector, radius: number) {
    let d = 0;
    loop({
      array: this._grid,
      callback: (cell) => {
        d = point.dist(cell.position);
        if (d < radius) {
          cell._sand = true;
        }
      },
    });
    return this;
  }
}
