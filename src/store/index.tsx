import AdminStore from './AdminStore';
import AppStore from './AppStore';

export const stores = {
  AppStore,
  AdminStore,
};

export default stores;

// 方便调试
interface MyWindow extends Window {
  __APP_STATE__: unknown;
}
(window as unknown as MyWindow).__APP_STATE__ = stores;
