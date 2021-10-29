import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
      <svg viewBox="25 25 50 50" className="circular">
        <circle cx="50" cy="50" r="20" fill="none" className="path"></circle>
      </svg>
    </div>
  );
};

export default Loading;
