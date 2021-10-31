import React from 'react';
import './index.css';

const Loading = () => {
  return (
    <div style={{ transform: 'scale(1)' }}>
      <div className="loading">
        <svg viewBox="25 25 50 50" className="circular">
          <circle cx="50" cy="50" r="20" fill="none" className="path"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
