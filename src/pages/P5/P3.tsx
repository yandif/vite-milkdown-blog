import Matter from 'matter-js';
import p5Types from 'p5';
import React, { useRef } from 'react';
import Sketch from 'react-p5';

import Block from './classes/Block';
import Mouse from './classes/Mouse';
const width = 800;
const height = 600;

const ReactP5: React.FC = () => {
  const el = useRef<any>([]);
  const setup = (p5: p5Types, parentRef: Element) => {
    const canvas = p5.createCanvas(width, height).parent(parentRef);

    // create an engine
    const engine = Matter.Engine.create();
    const world = engine.world;

    // add blocks
    const group = Matter.Body.nextGroup(true);
    const rect1 = new Block(world, p5,
      { x: 400, y: 200, w: 400, h: 40, color: 'white' } as any,
      { collisionFilter: { group: group }, angle: Math.PI / 10 * 4 }
    );
    const rect2 = new Block(world, p5,
      { x: 400, y: 200, w: 400, h: 40, color: 'white' } as any,
      { collisionFilter: { group: group }, angle: Math.PI - Math.PI / 10 * 4 }
    );

    // revolute
    rect2.constrainTo({ length: 0, stiffness: 1, draw: true }, rect1);

    // rubberband
    rect1.constrainTo({
      pointA: { x: 25, y: 80 },
      pointB: { x: -25, y: 80 },
      length: 70,
      draw: true,
      stiffness: 0.5
    }, rect2);

    // ground
    const ground = new Block(world,
      p5,
      { x: 400, y: height, w: 810, h: 100, color: 'white' } as any,
      { isStatic: true } as any);

    // setup mouse
    const mouse = new Mouse(engine, p5, canvas, { stroke: 'white' } as any);
    el.current = [rect1, rect2, ground, mouse];
    // run the engine
    Matter.Runner.run(engine);
  };

  const draw = (p5: p5Types) => {
    p5.background(125);
    const els = el.current;
    els.forEach((element: { draw: () => void; }) => {
      element.draw();
    });
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default ReactP5;
