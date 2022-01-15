import Matter, { Body, Engine, IEvent } from 'matter-js';
import p5Types, { Renderer } from 'p5';

type MouseAttrs = {
  stroke: string;
  strokeWeight: number;
};

export default class Mouse {
  attrs: MouseAttrs;
  p5: p5Types;
  mouseConstraint;

  constructor(
    engine: Engine,
    p5: p5Types,
    canvas: Renderer,
    attrs: MouseAttrs,
  ) {
    this.attrs = attrs || { stroke: 'magenta', strokeWeight: 2 };
    this.p5 = p5;
    const mouse = Matter.Mouse.create(canvas.elt);

    mouse.pixelRatio = p5.pixelDensity();

    const mouseOptions = {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        angularStiffness: 0,
      },
    };

    this.mouseConstraint = Matter.MouseConstraint.create(
      engine,
      mouseOptions as any,
    );

    Matter.World.add(engine.world, this.mouseConstraint);
  }

  on(event: string, action: (e: IEvent<Body>) => void) {
    Matter.Events.on(this.mouseConstraint, event, action);
  }

  draw() {
    this.p5.push();
    this.p5.stroke(this.attrs.stroke);
    this.p5.strokeWeight(this.attrs.strokeWeight);
    this.drawMouse();
    this.p5.pop();
  }

  drawMouse() {
    if (this.mouseConstraint.body) {
      const pos = this.mouseConstraint.body.position;
      const offset = this.mouseConstraint.constraint.pointB;
      const m = this.mouseConstraint.mouse.position;
      this.p5.line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
    }
  }
}
