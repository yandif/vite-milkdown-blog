import {
  Bodies,
  Body,
  Engine,
  Runner
} from 'matter-js';
import p5Types from 'p5';
import React, { useRef } from 'react';
import Sketch from 'react-p5';

import Ball from './classes/Ball';
import Block from './classes/Block';
import Mouse from './classes/Mouse';
import Stack from './classes/Stack';

const width = 800;
const height = 600;
let angle = 0;
const ReactP5: React.FC = () => {
  const element = useRef<any[]>([]);
  const setup = (p5: p5Types, parentRef: Element) => {
    const canvas = p5.createCanvas(width, height).parent(parentRef);

    const engine = Engine.create();
    const world = engine.world;

    const ball = new Ball(
      world,
      p5,
      { x: 300, y: 300, r: 30, color: 'green' } as any,
      {} as any,
    );

    const blockA = new Block(world, p5, { x: 200, y: 200, w: 80, h: 80, color: 'white' } as any, { density: 0.01 } as any);
    const blockB = new Block(world, p5, { x: 270, y: 300, w: 320, h: 20, color: 'white', angle: angle } as any, {} as any);
    const ground = new Block(world, p5, { x: 400, y: 500, w: 810, h: 15, color: 'grey' } as any, { isStatic: true, angle: p5.PI / 36, restitution: 0.5 } as any);
    const mouse = new Mouse(engine, p5, canvas, { stroke: 'red', strokeWeight: 2 });
    const boxs = new Stack(world, p5, { x: 100, y: 100, cols: 10, rows: 10, colGap: 5, rowGap: 5, color: 'red', create: (bx: number, by: number) => Bodies.circle(bx, by, 10, { restitution: 0.9 }) } as any, {} as any);
    blockB.constrainTo({});
    blockB.constrainTo({ pointB: { x: 0, y: 0 }, draw: true }, blockA);
    blockA.constrainTo({ draw: true }, ball);
    element.current = [ball, blockA, blockB, ground, mouse, boxs];
    Runner.run(engine);
  };

  const draw = (p5: p5Types) => {

    p5.background('#eee');
    const blocks = element.current;
    const ang = (i) => {
      Body.setAngle(blocks[i].body, angle);
      Body.setAngularVelocity(blocks[i].body, 0.13);
    };
    ang(0);
    ang(1);
    ang(2);

    angle += 0.07;
    blocks?.forEach(b => b.draw());
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default ReactP5;
