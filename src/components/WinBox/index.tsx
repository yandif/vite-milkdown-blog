import React, { createContext, useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import WinBox from 'winbox/src/js/winbox';
import 'winbox/src/css/winbox.less';
import './themes/modern.less';

const Store = createContext();

export default Store;

export const useWinBox = () => {
  const { open } = useContext(Store);
  return { open };
};

/**
 *  弹出框组件
 */
export const WinBoxProvider = (props) => {
  const { children } = props;
  const ref = useRef('winbox');
  const [box, setBox] = useState([]);

  const open = ({
    title = '弹窗',
    border = '0',
    background = '#28292d',
    className,
    x,
    y,
    width,
    height,
    top,
    right,
    bottom,
    left,
    modal = false,
    children,
    modern = true,
    onClose = () => {},
  }) => {
    const wb = new WinBox(title, {
      root: ref.current,
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
        ReactDOM.unmountComponentAtNode(
          document.querySelector(`#${wb.id} .wb-body`)
        );
        box.splice(
          box.findIndex(({ id }) => id === wb.id),
          1
        );
        setBox([...box]);
        onClose();
      },
    });
    ReactDOM.render(
      React.cloneElement(children, { wb }),
      document.querySelector(`#${wb.id} .wb-body`)
    );
    setBox([...box, wb]);
    return wb;
  };

  const value = { ...props, open };

  return (
    <Store.Provider value={value}>
      {children}
      <div ref={ref}></div>
    </Store.Provider>
  );
};
