import React from 'react';
import Anime from 'react-anime';
import './index.css';

let colors = ['red', 'green', 'blue'];

const MyAnime = props => {
  const animeOptions = {
    translateX: 270,
    direction: 'alternate',
    loop: true,
    delay: function (el, i, l) {
      return i * 100;
    },
    endDelay: function (el, i, l) {
      return (l - i) * 100;
    },
  };

  return (
    <Anime {...animeOptions}>
      {colors.map((color, i) => (
        <div key={i} className={color} />
      ))}
    </Anime>
  );
};

export default MyAnime;
