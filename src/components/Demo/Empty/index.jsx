import React from 'react';
import className from './index.module.css';

const Empty = _ => {
  return (
    <div className={className.empty}>
      <span>暂无数据</span>
    </div>
  );
};

export default Empty;
