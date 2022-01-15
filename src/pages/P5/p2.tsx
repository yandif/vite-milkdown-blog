import {
  Engine,
  Runner
} from 'matter-js';
import p5Types from 'p5';
import React, { useRef } from 'react';
import Sketch from 'react-p5';

import Ball from './classes/Ball';
import Block from './classes/Block';
import BlockSprite from './classes/BlockSprite';
import Mouse from './classes/Mouse';

const width = 800;
const height = 600;

const ReactP5: React.FC = () => {
  const element = useRef<any[]>();
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

    const blockA = new Block(world, p5, { x: 200, y: 200, w: 80, h: 80, color: 'white' } as any, {} as any);
    const blockB = new BlockSprite(world, p5, { x: 270, y: 50, w: 160, h: 80, color: 'white', } as any, {} as any);
    const ground = new Block(world, p5, { x: 400, y: 500, w: 810, h: 15, color: 'grey' } as any, { isStatic: true, angle: p5.PI / 36 } as any);
    const mouse = new Mouse(engine, p5, canvas, { stroke: 'red', strokeWeight: 2 });

    blockA.constrainTo(ball, { draw: true } as any);
    blockB.constrainTo(ball, { draw: true } as any);
    element.current = [ball, blockA, blockB, ground, mouse];
    Runner.run(engine);
  };

  const draw = (p5: p5Types) => {
    p5.background('#eee');
    const blocks = element.current;
    blocks?.forEach(b => b.draw());
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default ReactP5;
