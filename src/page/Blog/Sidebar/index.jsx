import Tree from '@/components/Blog/Tree';
import { inject, observer } from 'mobx-react';
import React from 'react';
import className from './index.module.less';

function Sidebar({ blogStore: { cards, menus } }) {
  const Menu = function () {
    return (
      <div className={className.menu}>
        {menus.map((menu, i) => (
          <Tree key={i} data={menu} />
        ))}
      </div>
    );
  };
  
  const card = cards.map((text, i) => (
    <div key={i} className={`${className.card} ${text && className.active}`}>
      <div className={className.cardContent}>{text}</div>
    </div>
  ));

  return (
    <div className={className.sider}>
      <div className={className.menuList}>
        <Menu />
      </div>
      <div className={className.cardList}>{card}</div>
    </div>
  );
}
export default inject('blogStore')(observer(Sidebar));
