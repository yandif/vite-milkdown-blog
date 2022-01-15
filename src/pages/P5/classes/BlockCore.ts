import { Bodies, Body, Vector, World } from 'matter-js';
import type p5Types from 'p5';

export type Attrs = {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
  image: p5Types.Image | p5Types.Element;
  color?: string;
  force?: Vector;
  trigger?: any;
  chgStatic?: boolean;
  rotate?: { angle: number; delta: number };
  cols: number;
  rows: number;
  colGap: number;
  rowGap: number;
  create: (x: number, y: number) => any;
};

export type Options = {
  isStatic: boolean;
  plugin: { block: BlockCore };
  restitution: any;
  angle: any;
};

/**
 * 这个类定义了 块核心
 * - 绘制各种属性
 * - 被放置在世界上的一个矩形作为一个物理物质体
 */
export default class BlockCore {
  world: World;
  p5: p5Types;
  attrs: Attrs;
  options: Options;
  body!: Body;
  /**
   * @param world
   * @param p5
   * @param attrs 块的视觉属性，例如位置和尺寸
   * @param options 定义块的行为，例如质量和弹性
   */
  constructor(world: World, p5: p5Types, attrs: Attrs, options: Options) {
    this.world = world;
    this.p5 = p5;
    this.attrs = attrs;
    this.options = options || {};
    this.options.plugin = this.options.plugin || {};
    this.options.plugin.block = this;
    this.addBody();
    if (this.body) {
      World.add(this.world, this.body);
      if (this.options.restitution) {
        this.body.restitution = this.options.restitution;
      }
    }
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
    if (this.attrs.color) {
      this.p5.fill(this.attrs.color);
    } else {
      this.p5.noFill();
    }
    this.p5.noStroke();
    this.drawBody();
  }

  drawBody() {
    if (this.body.parts && this.body.parts.length > 1) {
      // 跳过 index 0
      for (let p = 1; p < this.body.parts.length; p++) {
        this.drawVertices(this.body.parts[p].vertices);
      }
    } else {
      if (this.body.type == 'composite') {
        for (const body of (this.body as any).bodies) {
          this.drawVertices(body.vertices);
        }
      } else {
        this.drawVertices(this.body.vertices);
      }
    }
  }

  drawVertices(vertices: Vector[]) {
    this.p5.beginShape();
    for (const vertice of vertices) {
      this.p5.vertex(vertice.x, vertice.y);
    }
    this.p5.endShape('close');
  }
}
