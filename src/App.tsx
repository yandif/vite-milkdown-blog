import { inject, observer } from 'mobx-react';
import { useMount } from 'react-use';
import { TOKEN } from '@/constant';
import RootRoutes from '@/pages/RootRoutes';
import { FC } from 'react';

const App: FC = (props) => {
  const {
    AppStore: {
      data: { isInit },
      setIsLoading,
      setIsInit,
    },
    AdminStore: { setCurrentUser },
  } = props;

  useMount(() => initApp());

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
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 10);
      });

      // setCurrentUser({ name: 'yandif', phone: 13080080000 });
    } catch (e) {
      //
    } finally {
      setIsInit(true);
      setIsLoading(false);
    }
  };

  return isInit && <RootRoutes />;
};

export default inject('AdminStore', 'AppStore')(observer(App));
