import React from 'react';
import { svg } from './data';
import className from './index.module.css';
export default function Icon({ type, style, onClick }) {
  return (
    <i className={className.icon} style={style} onClick={onClick}>
      {svg[type]}
    </i>
  );
}
