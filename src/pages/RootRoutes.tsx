import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import { Navigate, RouteObject, useLocation, useRoutes } from 'react-router-dom';

import AdminLayout from '@/layouts/Admin';
import HomeLayout from '@/layouts/Home';
import AdminRoutes from '@/pages/Admin/routes';
import HomeRoutes from '@/pages/Home/routes';
import P5Routes from '@/pages/P5/routes';
import AdminStore from '@/store/AdminStore';
import AppStore from '@/store/AppStore';

const RootRoutes: FC = observer(() => {
  const routing = useRoutes([
    {
      path: '/',
      element: <HomeLayout />,
      children: Tranform(HomeRoutes),
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: Tranform(AdminRoutes),
    },
    {
      path: '/p5',
      children: Tranform(P5Routes),
    },
  ]);
  return routing;
});

export default RootRoutes;

/**
 *  转化route
 */
const Tranform = (routes: Route[]): RouteObject[] => {
  return routes.map(
    ({
      path,
      element,
      children,
      caseSensitive = false,
      index = false,
      auth = false,
      hideHeader = false,
      hideSidebar = false,
      hideFooter = true,
    }) => {
      const route: RouteObject = {
        path,
        element: (
          <Auth
            element={element}
            auth={auth}
            hideHeader={hideHeader}
            hideSidebar={hideSidebar}
            hideFooter={hideFooter}
          />
        ),
        children,
        index,
        caseSensitive,
      };
      if (children) {
        route.children = Tranform(children);
      }
      return route;
    },
  );
};

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
  const { setIsLoading, setHidden, } = _AppStore;
  const { data: { user } } = _AdminStore;

  useEffect(() => {
    setHidden({ hideHeader, hideSidebar, hideFooter });

    console.log('加载动画');
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

export type Route = {
  path: string;
  element: JSX.Element;
  children?: Route[];
  caseSensitive?: boolean;
  index?: boolean;
  auth?: boolean;
  hideHeader?: boolean;
  hideSidebar?: boolean;
  hideFooter?: boolean;
}
