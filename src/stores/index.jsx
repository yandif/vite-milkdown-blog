import { Provider } from 'mobx-react';
import React from 'react';
import commonStore from './commonStore';
import blogStore from './blogStore';

const stores = {
  commonStore,
  blogStore,
};

// 方便调试
window._____APP_STATE_____ = stores;

export default function MobxProvider({ children }) {
  return <Provider {...stores}>{children}</Provider>;
}
