import { Bodies, World } from 'matter-js';
import p5Types from 'p5';

import Block from './Block';
import { Attrs, Options } from './BlockCore';

export default class BlockSprite extends Block {
  image!: p5Types.Image | p5Types.Element;
  constructor(world: World, p5: p5Types, attrs: Attrs, options: Options) {
    super(world, p5, attrs, options);
    this.image = attrs.image;
  }

  addBody() {
    this.body = Bodies.rectangle(
      this.attrs.x,
      this.attrs.y,
      this.attrs.w,
      this.attrs.h,
      this.options,
    );
  }

  draw() {
    this.update();
    this.drawSprite();
    if (this.constraints.length > 0) {
      for (const c of this.constraints) {
        if ((c as any).draw === true) this.drawConstraint(c);
      }
    }
  }

  drawSprite() {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.p5.push();
    this.p5.translate(pos.x, pos.y);
    this.p5.rotate(angle);
    this.p5.imageMode('center');
    this.p5.image(this.image, 0, 0);
    this.p5.pop();
  }
}
