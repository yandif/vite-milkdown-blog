import { Provider } from 'mobx-react';
import { FC } from 'react';
import AdminStore from './AdminStore';
import AppStore from './AppStore';

export const stores = {
  AppStore,
  AdminStore,
};

const MobxProvider: FC = ({ children }) => {
  return <Provider {...stores}>{children}</Provider>;
};

export default MobxProvider;


// 方便调试
interface MyWindow extends Window {
  __APP_STATE__: unknown;
}
(window as unknown as MyWindow).__APP_STATE__ = stores;
