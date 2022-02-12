import './index.less';

import Engine, { $, EngineInterface } from '@aomao/engine';
import { FC, useEffect, useRef, useState } from 'react';

import { cards, pluginConfig, plugins } from './config';
import Toc from './toc';
import Toolbar from './toolbar';

const Editor: FC<{ onChange: (value: any) => any, showToolBar?: boolean }> = ({ onChange, showToolBar = false }) => {

  //编辑器容器
  const ref = useRef(null);
  //引擎实例
  const [engine, setEngine] = useState<EngineInterface>();
  //编辑器内容
  const [content, setContent] = useState<string>('Editing here!');

  useEffect(() => {
    if (!ref.current) return;

    //实例化引擎
    const engine = new Engine(ref.current, {
      plugins: plugins,
      cards: cards,
      config: {
        ...pluginConfig,
      },
    });

    //设置编辑器值
    engine.setValue(content);

    //监听编辑器值改变事件
    engine.on('change', () => {
      const value = engine.getValue();
      setContent(value);
      onChange && onChange(value);
    });

    // engine.on('card:maximize', () => {
    //   alert(1);
    //   // 表格
    // });

    // console.log('engine', engine);

    //设置引擎实例
    setEngine(engine);
  }, []);

  // 点击编辑区域外的空白位置继续聚焦编辑器
  const wrapperMouseDown = (event: { target: any; preventDefault?: any; }) => {
    const { target } = event;
    // console.log('wrapperMouseDown', event.target, ref.current);
    if (
      !target ||
      ['TEXTAREA', 'INPUT'].indexOf(target.nodeName) > -1
    )
      return;
    if (
      ref.current &&
      // ref.current.isFocus() &&
      $(target).closest('.editor-content').length === 0
    ) {
      event.preventDefault();
    }
  };

  // 编辑器区域单击在没有元素的位置，聚焦到编辑器
  const editorAreaClick = (event: { preventDefault?: any; target?: any; }) => {
    const { target } = event;
    if (!target) return;
    if (ref.current && $(target).hasClass('editor-content')) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className="editor-toolbar-wrapper">
        {showToolBar && <Toolbar engine={engine} />}
      </div>
      <div className="editor-wrapper" onMouseDown={wrapperMouseDown}>
        <div className="editor-container">
          <div
            className="editor-content"
            onMouseDown={editorAreaClick}
          >
            <div ref={ref} />
          </div>
        </div>

        {engine && <Toc editor={engine} title="目录" />}
      </div>

    </div>
  );
};

export default Editor;
