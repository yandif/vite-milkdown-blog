import { inject, observer } from 'mobx-react';
import { useMount } from 'react-use';
import { TOKEN } from '@/constant';
import RootRoute from '@/pages/RootRoute';

const App = (props) => {
  const {
    AppStore: {
      data: { isLoading, isInit },
      setIsLoading,
      setIsInit,
    },
    AdminStore: {
      data: { user },
      setCurrentUser,
    },
  } = props;

  useMount(() => initApp());

  const initApp = async () => {
    setIsLoading(true);

    // 1.获取token
    const token = localStorage.getItem(TOKEN);

    // 2.如果token不存在，把当前用户置空
    if (!token) {
      return setCurrentUser(null);
    }

    // 3.token存在,根据token获取用户信息。
    try {
      //
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 10);
      });
      
      setCurrentUser({ name: 'yandif', phone: 13080080000 });
    } catch (e) {
      //
    }

    setIsInit(true);
    setIsLoading(false);
  };

  return isInit && <RootRoute auth={user} />;
};

export default inject('AdminStore', 'AppStore')(observer(App));
