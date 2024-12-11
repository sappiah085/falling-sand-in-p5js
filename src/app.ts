import "p5/lib/addons/p5.dom";import { draw } from "./functions/draw";
import { setup } from "./functions/setup";
import P5 from "p5";
import { mouseDragged } from "./functions/mouseDragged";
// import "p5/lib/addons/p5.sound";


const sketch = (p5: P5) => {
  p5.setup = () => setup(p5);
  p5.draw = () => draw(p5);
  p5.mouseDragged = (e)=> mouseDragged(p5, e as MouseEvent)
};

new P5(sketch);
