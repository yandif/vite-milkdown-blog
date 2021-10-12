import Icon from '@/components/Blog/Icon';
import React, { useState } from 'react';
import className from './index.module.less';

export default function Tree({ data, deep = 0, isOpen = false }) {
  const { name, children, onClick } = data;
  const hasChildren = Array.isArray(children) && children?.length > 0;

  const [open, setOpen] = useState(isOpen);

  return (
    <React.Fragment>
      <div className={className.nameBox}>
        <div
          className={className.name}
          onClick={() => {
            onClick && onClick(name);
          }}
          style={{
            paddingLeft: `${deep * 20 + 15}px`,
          }}
        >
          {hasChildren && (
            <span className={className.toggler}>
              <Icon
                type="三角形"
                onClick={event => {
                  event.stopPropagation();
                  setOpen(!open);
                }}
                style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
              />
            </span>
          )}
          {name}
        </div>
      </div>

      {hasChildren && (
        <div
          className={className.treebox}
          style={{
            display: open ? 'block' : 'none',
          }}
        >
          {children.map(menu => (
            <Tree key={menu.name} data={menu} deep={deep + 1} isOpen={open} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
