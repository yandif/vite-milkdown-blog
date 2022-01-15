import p5Types from 'p5';
import React, { useRef } from 'react';
import Sketch from 'react-p5';

import { tool } from '@/utils';
const randomInt = tool.randomInt;
const width = 1920;
const height = 1080;
class RectCore {
  p5: p5Types;
  x: number;
  y: number;
  w: number;
  h: number;
  tl?: number;
  tr?: number;
  br?: number;
  bl?: number;
  background?: string;
  random: number;
  constructor({ p5, x, y, w, h, tl, tr, br, bl, background, random }: RectCore) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.tl = tl;
    this.tr = tr;
    this.br = br;
    this.bl = bl;
    this.background = background;
    this.random = random;
  }
}

class Rect extends RectCore {
  constructor(props: RectCore) {
    super(props);
  }

  draw() {
    const { p5, x, y, w, h, tl, tr, br, bl, background = '#fff' } = this;
    randomInt(100) > 99 && this.next();
    p5.rect(x, y, w, h, tl, tr, br, bl).fill(background).noStroke();
  }

  next() {
    this.x += randomInt(-this.random, this.random);
    this.y += randomInt(-this.random, this.random);
    this.w += randomInt(-this.random, this.random);
    this.h += randomInt(-this.random, this.random);
    this.tl = randomInt(50);
    this.tr = randomInt(50);
    this.bl = randomInt(50);
    this.br = randomInt(50);
    // if (this.x < 0) {
    //   this.x = 0;
    // }
    // if (this.x > width) {
    //   this.x = width;
    // }
    // if (this.y < 0) {
    //   this.y = 0;
    // }
    // if (this.y > height) {
    //   this.y = height;
    // }
    // if (this.w < 0) {
    //   this.w = 0;
    // }
    // if (this.w > 100) {
    //   this.w = 100;
    // }
    // if (this.h < 0) {
    //   this.h = 0;
    // }
    // if (this.h > 100) {
    //   this.h = 100;
    // }
  }
}

const ReactP5: React.FC = () => {
  const element = useRef<any>([]);
  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(width, height).parent(parentRef);

    for (let i = 0; i < 10000; i++) {
      const color = `rgba(${randomInt(255)},${randomInt(255)},${randomInt(255)},${Math.random()})`;
      element.current.push(new Rect({ p5, x: randomInt(width), y: randomInt(height), w: randomInt(1), h: randomInt(1), random: 10, background: color }));
    }
  };

  const draw = (p5: p5Types) => {
    p5.background('#eee');
    element.current.forEach((el: { draw: () => any; }) => el.draw());
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default ReactP5;
