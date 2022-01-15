// MatterStepOne.js
import {
  Bodies,
  Engine,
  Render,
  Runner,
  World
} from 'matter-js';
import React, { useEffect, useRef } from 'react';

import img from './ball.png';
const MatterStepOne = () => {
  const boxRef = useRef<any>();
  const canvasRef = useRef<any>();

  const engine = useRef<any>();
  useEffect(() => {
    const ground = Bodies.rectangle(600, 600, 1200, 10, { isStatic: true, angle: -Math.PI / 14 });
    const ground2 = Bodies.rectangle(0, 300, 1200, 10, { isStatic: true, angle: Math.PI / 10 });
    engine.current = Engine.create();

    const render = Render.create({
      element: boxRef.current,
      engine: engine.current,
      canvas: canvasRef.current,
      options: {
        width: 1200,
        height: 699,
        background: 'rgba(255, 0, 0, 0.5)',
        wireframes: false,
      },
    });
    World.add(engine.current.world, [ground, ground2]);
    Runner.run(engine.current);
    Render.run(render);
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: 1200,
          height: 600,
        }}
      >
        <canvas ref={canvasRef} onClick={(e) => {
          const boxA = Bodies.circle(e.clientX, e.clientY, 20 + 20 * Math.random(), {
            render: {
              sprite: {
                texture: img,
                xScale: 1,
                yScale: 1,
              }, fillStyle: 'gold'
            }
          });
          World.add(engine.current.world, [boxA]);
        }} />
      </div>

    </div>

  );
};
export default MatterStepOne;
