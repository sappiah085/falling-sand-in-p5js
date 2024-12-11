import p5 from "p5";
import { variables } from "../common/variables";
import { Grid } from "../classes/grid";
export let grid: Grid;
export function setup(p5: p5): void {
  p5.createCanvas(variables.w_grid, variables.h_grid);
  p5.background(0);
  grid = new Grid(
    variables.n_rows,
    variables.n_cols,
    variables.w_grid,
    variables.h_grid
  ).createGrid(p5);
}
