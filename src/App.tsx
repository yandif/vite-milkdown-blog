import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';

import Routes from '@/components/Routes';
import { TOKEN } from '@/constants';
import routes from '@/pages/routes';
import { Account } from '@/services';
import AdminStore from '@/store/AdminStore';
import AppStore from '@/store/AppStore';

const App: FC = () => {
  const [_AppStore] = useState(() => AppStore);
  const [_AdminStore] = useState(() => AdminStore);
  const { data: { isInit }, setIsLoading, setIsInit, } = _AppStore;
  const { setCurrentUser } = _AdminStore;

  useEffect(() => { initApp(); }, []);

  const initApp = async () => {
    setIsLoading(true);
    try {
      // 1.获取token
      const token = localStorage.getItem(TOKEN);

      // 2.如果token不存在，把当前用户置空
      if (!token) {
        setCurrentUser(null);
        throw new Error('用户未登录');
      }
      // 3.token存在,根据token获取用户信息。
      const res = await Account.getUserInfo();
      if (res.code === 0) {
        setCurrentUser(res.data);
      } 
    } catch (e) {
      console.log(e);
    } finally {
      setIsInit(true);
      setIsLoading(false);
    }
  };

  return isInit && <Routes routes={routes} /> || null;
};

export default observer(App);
