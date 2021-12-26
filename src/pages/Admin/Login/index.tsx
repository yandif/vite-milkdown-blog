import './index.less';

import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Background from '@/components/Background';
import AdminStore from '@/store/AdminStore';

import LoginForm from './LoginForm';

const Login = () => {
  const prefix = 'page-login';
  const [_AdminStore] = useState(() => AdminStore);
  const { data: { user }, setCurrentUser } = _AdminStore;
  const nav = useNavigate();
  useEffect(() => {
    if (user) {
      nav('/admin');
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
