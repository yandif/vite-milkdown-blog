import { Bodies, World } from 'matter-js';
import type p5Types from 'p5';

import { Attrs, Options } from './BlockCore';
import BlockSprite from './BlockSprite';

export default class BallSprite extends BlockSprite {
  image: p5Types.Image | p5Types.Element;
  constructor(world: World, p5: p5Types, attrs: Attrs, options: Options) {
    super(world, p5, attrs, options);
    this.image = attrs.image;
  }

  addBody() {
    this.body = Bodies.circle(
      this.attrs.x,
      this.attrs.y,
      this.attrs.r,
      this.options,
    );
  }

}
