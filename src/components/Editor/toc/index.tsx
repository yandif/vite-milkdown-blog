import './index.css';

import { $, EditorInterface, isEngine, Scrollbar } from '@aomao/engine';
import { Outline, OutlineData } from '@aomao/plugin-heading';
import React, {
  useCallback, useEffect,
  useRef,
  useState
} from 'react';
import { useLocation } from 'react-router-dom';

import { findReadingSection } from './utils';

type Props = {
  editor: EditorInterface;
  title?: string;
};

const outline = new Outline();

const Toc: React.FC<Props> = ({ editor, title }: Props) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [datas, setDatas] = useState<Array<OutlineData>>([]);
  const [readingSection, setReadingSection] = useState(-1);

  const location = useLocation();
  const lang = 'zh-CN';

  useEffect(() => {
    const onChange = () => {
      const data = getTocData();
      setDatas(data);
    };
    editor.on('change', onChange);
    editor.on('afterSetValue', onChange);
    return () => {
      editor.off('change', onChange);
      editor.off('afterSetValue', onChange);
    };
  }, [editor]);

  const getTocData = useCallback(() => {
    // 从编辑区域提取符合结构要求的标题 Dom 节点
    const nodes: Array<Element> = [];
    const { card } = editor;
    editor.container.find('h1,h2,h3,h4,h5,h6').each((child) => {
      const node = $(child);
      // Card 里的标题，不纳入大纲
      if (card.closest(node)) {
        return;
      }
      // 非一级深度标题，不纳入大纲
      if (!node.parent()?.isRoot()) {
        return;
      }
      nodes.push(node.get<Element>()!);
    });
    return outline.normalize(nodes);
  }, []);

  const listenerViewChange = useCallback(() => {
    const data: Array<HTMLElement> = datas
      .map(({ id }) => document.getElementById(id))
      .filter((element) => element !== null) as Array<HTMLElement>;

    const index = findReadingSection(data, 220);
    setReadingSection(index);
  }, [datas]);

  useEffect(() => {
    if (isEngine(editor)) {
      editor.scrollNode?.on('scroll', listenerViewChange);
      editor.scrollNode?.on('resize', listenerViewChange);
    } else {
      window.addEventListener('scroll', listenerViewChange);
      window.addEventListener('resize', listenerViewChange);
    }
    listenerViewChange();
    return () => {
      if (isEngine(editor)) {
        editor.scrollNode?.off('scroll', listenerViewChange);
        editor.scrollNode?.off('resize', listenerViewChange);
      } else {
        window.removeEventListener('scroll', listenerViewChange);
        window.removeEventListener('resize', listenerViewChange);
      }
    };
  }, [listenerViewChange]);

  useEffect(() => {
    if (!rootRef.current) return;
    const scrollbar = new Scrollbar(rootRef.current, false, true, false);
    return () => {
      scrollbar.destroy();
    };
  }, [datas]);

  if (datas.length === 0) return null;

  return (
    <div className="data-toc-wrapper">
      <div className="data-toc-title">
        {lang === 'zh-CN' ? title || '大纲' : 'Outline'}
      </div>
      <div className="data-toc" ref={rootRef}>
        {datas.map((data, index) => {
          return (
            <a
              key={data.id}
              href={'http://localhost:3002/#' + location.pathname + '#' + data.id}
              className={`data-toc-item data-toc-item-${data.depth} ${index === readingSection ? 'data-toc-item-active' : ''}`
              }>
              {data.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Toc;
