import { View as DefaultView, ViewInterface } from '@aomao/engine';
import { FC, useEffect, useRef, useState } from 'react';

import { cards, pluginConfig, plugins } from './config';

const View: FC<{
  content?: string
}> = ({ content = '暂无数据' }) => {
  //编辑器容器
  const ref = useRef(null);
  //引擎实例
  const [view, setView] = useState<ViewInterface>();

  useEffect(() => {
    if (!ref.current) return;

    //实例化引擎
    const view = new DefaultView(ref.current, {
      plugins: plugins,
      cards: cards,
      config: pluginConfig,
    });

    setView(view);
  }, []);

  useEffect(() => {
    if (view && content) {
      view.render(content);
    }
  }, [content, view]);

  return (
    <div className='component-editor-view'>
      <div className='am-engine-view'>
        <div ref={ref} />
      </div>
    </div>
  );
};

export default View;
