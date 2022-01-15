import { Body,Composites, World } from 'matter-js';
import p5Types from 'p5';

import Block from './Block';
import { Attrs, Options } from './BlockCore';
/**
 * 用法：
 * - 通过 cols, rows, colGap, rowGap 定义块部分并创建属性
 * @example
 * let block = new CompositeBlock(world, { x: 550, y: 100, cols: 10, rows: 10, colGap: 5, rowGap: 5, color: 'red', create: (bx, by) => Bodies.circle(bx, by, 10, { restitution: 0.9 }) }, {});
 */
export default class Stack extends Block {
  constructor(world: World, p5: p5Types, attrs: Attrs, options: Options) {
    super(world, p5, attrs, options);
  }
  addBody() {
    const body = Composites.stack(
      this.attrs.x,
      this.attrs.y,
      this.attrs.cols,
      this.attrs.rows,
      this.attrs.colGap,
      this.attrs.rowGap,
      this.attrs.create
    ) as unknown as Body;
    
    this.body = body;
  }
}
