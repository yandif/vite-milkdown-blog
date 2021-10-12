import React, { useState } from 'react';
import className from './index.module.css';

export default function Comparison({ oldImg, newImg }) {
  const [slide, setSlide] = useState(500);
  console.log(oldImg, newImg);

  return (
    <div
      className={className.comparison}
      style={{ '--slide': slide, '--oldImg': `url(${oldImg})`, '--newImg': `url(${newImg})` }}
    >
      <input
        type="range"
        min="0"
        max="1000"
        value={slide}
        className={className.slider}
        onInput={e => {
          setSlide(e.target.value);
        }}
      />
    </div>
  );
}
