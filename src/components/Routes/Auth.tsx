import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import AdminStore from '@/store/AdminStore';
import AppStore from '@/store/AppStore';

const Auth: FC<{
  element: React.ReactNode;
  auth: boolean;
  hideHeader: boolean;
  hideSidebar: boolean;
  hideFooter: boolean;
}> = observer((props) => {
  const {
    element,
    auth,
    hideHeader,
    hideSidebar,
    hideFooter,
  } = props;
  const location = useLocation();
  const [_AppStore] = useState(() => AppStore);
  const [_AdminStore] = useState(() => AdminStore);
  const { setIsLoading, setHidden } = _AppStore;
  const { data: { user } } = _AdminStore;

  setHidden({ hideHeader, hideSidebar, hideFooter });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, [location.pathname]);

  if (auth && !user) {
    return <Navigate to="/admin/login" />;
  }

  return <React.Fragment>{element}</React.Fragment>;
});

export default Auth;
