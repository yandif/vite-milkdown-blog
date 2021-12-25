import './index.less';

import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import Background from '@/components/Background';
import AdminStore from '@/store/AdminStore';

import LoginForm from './LoginForm';

const Login = () => {
  const prefix = 'page-login';
  const [_AdminStore] = useState(() => AdminStore);
  const { setCurrentUser } = _AdminStore;

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
