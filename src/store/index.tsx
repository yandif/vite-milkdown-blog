import { Provider } from 'mobx-react';
import React, { FunctionComponent } from 'react';
import type { AdminStore } from './adminStore';
import adminStore from './adminStore';

type Store = {
  adminStore: AdminStore;
};

export const stores: Store = {
  adminStore,
};

const MobxProvider: FunctionComponent = ({ children }) => {
  return <Provider {...stores}>{children}</Provider>;
};

export default MobxProvider;

declare global {
  var _____APP_STATE_____: any;
}
// 方便调试
window._____APP_STATE_____ = stores;
