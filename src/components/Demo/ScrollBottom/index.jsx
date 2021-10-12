import React, { useEffect, useRef } from 'react';
import className from './index.module.css';

const ScrollBottom = ({ offset = 20, callback = () => {}, children }) => {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.addEventListener('scroll', e => {
      const { clientHeight, scrollHeight, scrollTop } = e.target;
      const isBottom = scrollTop + clientHeight + offset > scrollHeight;
      if (isBottom) {
        if (typeof callback === 'function') {
          callback();
        }
      }
    });
  }, []);
  return <div ref={scrollRef}>{children}</div>;
};

export default MyAnime;
