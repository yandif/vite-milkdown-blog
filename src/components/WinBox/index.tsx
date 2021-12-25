import 'winbox/src/css/winbox.less';
import './themes/modern.less';

import React, { createContext, FC, useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import WinBox from 'winbox/src/js/winbox';

const Store = createContext<{
  open: (config?: WinBoxConfig) => any
}>({} as any);

export const useWinBox = () => {
  const { open } = useContext(Store);
  return { open };
};

/**
 *  弹出框组件
 */
export const WinBoxProvider: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<any[]>([]);

  const open = ({
    title = '弹窗',
    border = '0',
    background = '#28292d',
    className,
    x = 'center',
    y = 'center',
    width,
    height,
    top,
    right,
    bottom,
    left,
    modal = false,
    children = <></>,
    modern = true,
    onClose = () => { },
  }: WinBoxConfig = {}) => {
    const wb = new WinBox({
      title,
      root: ref.current as Node,
      border,
      background,
      x,
      y,
      width,
      height,
      top,
      right,
      bottom,
      left,
      modal,
      class: `${modern ? 'modern' : className ? `${className}` : ''}`,
      onclose: () => {
        const component = document.querySelector(`#${wb.id} .wb-body`);
        component && ReactDOM.unmountComponentAtNode(component);

        box.splice(
          box.findIndex(({ id }) => id === wb.id),
          1,
        );
        setBox([...box]);
        onClose();
        return false;
      },
    });
    ReactDOM.render(
      React.cloneElement(children, { wb }),
      document.querySelector(`#${wb.id} .wb-body`),
    );
    setBox([...box, wb]);
    return wb;
  };

  const value = { open };

  return (
    <Store.Provider value={value}>
      <div ref={ref}></div>
      {children}
    </Store.Provider>
  );
};

type WinBoxConfig = {
  title?: string;
  border?: string;
  background?: string;
  className?: string;
  x?: string;
  y?: string;
  width?: string | number;
  height?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  modal?: boolean;
  children?: JSX.Element;
  modern?: boolean;
  onClose?: () => unknown;
}
