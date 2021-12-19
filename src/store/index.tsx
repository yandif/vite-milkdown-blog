import { Provider } from 'mobx-react';
import React, { FunctionComponent } from 'react';
import AppStore, { AppStoreType } from './AppStore';
import AdminStore, { AdminStoreType } from './AdminStore';

type Store = {
  AdminStore: AdminStoreType;
  AppStore: AppStoreType;
};

export const stores: Store = {
  AppStore,
  AdminStore
};

const MobxProvider: FunctionComponent = ({ children }) => {
  return <Provider {...stores}>{children}</Provider>;
};

export default MobxProvider;

// 方便调试
window.__APP_STATE__ = stores;
declare global {
  let __APP_STATE__: Store;
}
