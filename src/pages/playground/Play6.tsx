import { FC, useEffect } from 'react';
import { Ellipse, Illustration, Polygon, Rect } from 'zdog';

const Play6: FC = () => {
  useEffect(() => {
    const illo = new Illustration({
      element: '.zdog-canvas',
      zoom: 1,
      dragRotate: true,
    });

    // add circle
    new Ellipse({
      addTo: illo,
      diameter: 80,
      stroke: 20,
      color: '#636',
    });

    new Rect({
      addTo: illo,
      width: 80,
      height: 80,
      // position further back
      translate: { z: -40 },
      stroke: 12,
      color: '#E62',
      fill: true,
    });
    illo.updateRenderGraph();

    function animate() {
      // rotate illo each frame
      illo.rotate.y += 0.03;
      illo.updateRenderGraph();
      // animate next frame
      requestAnimationFrame(animate);
    }
    // start animation
    animate();
  }, []);

  return <canvas className='zdog-canvas' />;
};

export default Play6;
