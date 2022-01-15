import { Bodies, World } from 'matter-js';
import type p5Types from 'p5';

import Block from './Block';
import { Attrs, Options } from './BlockCore';

/**
 * 这个类定义球
 * - 通过 r 属性定义球半径
 * @example
 * const ball = new Ball(
 *    world,
 *    p5,
 *    { x: 300, y: 300, r: 30, color: 'magenta' },
 *    { isStatic: true },
 * );
 */

export default class Ball extends Block {
  constructor(world: World, p5: p5Types, attrs: Attrs, options: Options) {
    super(world, p5, attrs, options);
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
