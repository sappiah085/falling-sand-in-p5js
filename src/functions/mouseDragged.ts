import p5 from "p5";

import { grid } from "./setup";
export const mouseDragged = (p5: p5, e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.className != "p5Canvas") return;
  grid.findCellsWithMouseRadius(p5.createVector(e.x, e.y), 20).draw(p5);
};
