import Background from '@/components/Background';
import { inject, observer } from 'mobx-react';
import React from 'react';
import './index.less';
import LoginForm from './LoginForm';

const Login = ({ adminStore: { setUser }, history }) => {
  const prefix = 'page-login';

  return (
    <div className={prefix}>
      <div className={`${prefix}-background`}>
        <Background row={12} col={8} />
      </div>
      <LoginForm prefix={prefix} setUser={setUser} history={history} />
    </div>
  );
};

export default inject('adminStore')(observer(Login));
