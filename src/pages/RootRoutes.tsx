import AdminLayout from '@/layouts/Admin';
import HomeLayout from '@/layouts/Home';
import AdminRoutes from '@/pages/Admin/routes';
import HomeRoutes from '@/pages/Home/routes';
import { AdminStoreType } from '@/store/AdminStore';
import { AppStoreType } from '@/store/AppStore';
import { inject, observer } from 'mobx-react';
import React, { useEffect, FC } from 'react';
import { Navigate, useRoutes, RouteObject } from 'react-router-dom';

const RootRoutes: FC = () => {
  const routing = useRoutes([
    {
      path: '/',
      element: <HomeLayout />,
      children: T(HomeRoutes),
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: T(AdminRoutes),
    },
  ]);
  return routing;
};

export default RootRoutes;



const Auth: FC<Props> = (props) => {
  const {
    AppStore: {
      data: { isLoading },
      setHidden,
      setIsLoading,
    },
    AdminStore: {
      data: { user },
    },
    element,
    auth,
    hideHeader,
    hideSidebar,
    hideFooter,
  } = props as unknown as MobxProps;

  useEffect(() => {
    setHidden({ hideHeader, hideSidebar, hideFooter });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  if (auth && !user) {
    return <Navigate to="/login" />;
  }

  return !isLoading && element || null;
};

const MobxAuth = inject('AdminStore', 'AppStore')(observer(Auth));


/**
 *  转化route
 */
const T = (routes: Route[]): RouteObject[] => {
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
      hideFooter = false,
    }) => {
      const route: RouteObject = {
        path,
        element: (
          <MobxAuth
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
        route.children = T(children);
      }
      return route;
    },
  );
};


type Props = {
  element: React.ReactNode;
  auth: boolean;
  hideHeader: boolean;
  hideSidebar: boolean;
  hideFooter: boolean;
}

type MobxProps = {
  AppStore: AppStoreType;
  AdminStore: AdminStoreType;
  element: JSX.Element;
  auth: boolean;
  hideHeader: boolean;
  hideSidebar: boolean;
  hideFooter: boolean;
}
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
