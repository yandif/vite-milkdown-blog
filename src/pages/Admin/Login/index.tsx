import './index.less';

import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Background from '@/components/Background';
import { message } from '@/components/Message';
import { TOKEN } from '@/constants';
import { Account } from '@/services';
import AdminStore from '@/store/AdminStore';

import LoginForm from './LoginForm';

const Login = () => {
  const prefix = 'page-login';
  const [_AdminStore] = useState(() => AdminStore);
  const { data: { user }, setCurrentUser } = _AdminStore;
  const nav = useNavigate();

  const getUserInfo = async () => {
    // 1.获取token
    const token = localStorage.getItem(TOKEN);
    if (token) {
      // 2.token存在,根据token获取用户信息。
      const res = await Account.getUserInfo();
      if (res.code === 0) {
        setCurrentUser(res.data);
      } else {
        localStorage.removeItem(TOKEN);
        message.error(res.message);
      }
    }
  };

  useEffect(() => {
    if (user) {
      nav('/admin', { replace: true });
    } else {
      getUserInfo();
    }
  }, [user]);
  
  return (
    <div className={prefix}>
      <div className={`${prefix}-background`}>
        <Background />
      </div>
      <LoginForm prefix={prefix} setCurrentUser={setCurrentUser} />
    </div>
  );
};

export default observer(Login);
