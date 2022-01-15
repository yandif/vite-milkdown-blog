import { Body, Constraint, IConstraintDefinition, World } from 'matter-js';
import type p5Types from 'p5';

import BlockCore, { Attrs, Options } from './BlockCore';

/**
 * 这个类定义了 块
 * - 受限于其他方块或场景本身
 * - 从它碰撞的其他块施加力
 * - 通过属性旋转围绕其中心旋转
 * - 触发与它碰撞的其他块的动作
 * @example
 * let block = new Block(
 *    world,
 *    p5,
 *    { x: 400, y: 500, w: 810, h: 15, color: 'grey' },
 *    { isStatic: true, angle: PI / 36 },
 * );
 */
export default class Block extends BlockCore {
  collisions!: Block[];
  constraints!: Constraint[];
  constructor(world: World, p5: p5Types, attrs: Attrs, options: Options) {
    super(world, p5, attrs, options);
    this.collisions = [];
    this.constraints = [];
  }

  draw() {
    this.update();
    super.draw();
    if (this.constraints && this.constraints.length > 0) {
      for (const c of this.constraints) {
        if ((c as any).draw === true) this.drawConstraint(c);
      }
    }
  }

  drawConstraints() {
    if (this.constraints.length > 0) {
      for (const c of this.constraints) {
        this.drawConstraint(c);
      }
    }
  }

  drawConstraint(constraint: Constraint) {
    this.p5.stroke('magenta');
    this.p5.strokeWeight(2);
    const offsetA = constraint.pointA;
    let posA = {
      x: 0,
      y: 0,
    };
    if (constraint.bodyA) {
      posA = constraint.bodyA.position;
    }
    const offsetB = constraint.pointB;
    let posB = {
      x: 0,
      y: 0,
    };
    if (constraint.bodyB) {
      posB = constraint.bodyB.position;
    }
    this.p5.line(
      posA.x + offsetA.x,
      posA.y + offsetA.y,
      posB.x + offsetB.x,
      posB.y + offsetB.y,
    );
  }

  update() {
    this.collisions.forEach((block) => {
      if (block.attrs.force) {
        Body.applyForce(this.body, this.body.position, block.attrs.force);
      }
      if (block.attrs.trigger) {
        block.attrs.trigger(this, block);
      }
    });
    this.collisions = [];

    if (this.attrs.chgStatic) {
      Body.setStatic(this.body, false);
    }

    if (this.attrs.rotate) {
      // 设置旋转的角度
      Body.setAngle(this.body, this.attrs.rotate.angle);
      Body.setAngularVelocity(this.body, 0.15);
      // 增加角度
      this.attrs.rotate.angle += this.attrs.rotate.delta;
    }
  }

  constrainTo(options: IConstraintDefinition, block?: Block) {
    options.bodyA = this.body;
    if (block) {
      // 约束到另一个块
      if (!options.bodyB) {
        options.bodyB = block.body;
      }
    } else {
      // 约束到“background”场景
      if (!options.pointB) {
        options.pointB = { x: this.body.position.x, y: this.body.position.y };
      }
    }
    const contraint = Constraint.create(options);
    this.constraints.push(contraint);
    World.add(this.world, contraint);
    return contraint;
  }

  collideWith(block: Block) {
    if (block) {
      this.collisions.push(block);
    }
  }
}
