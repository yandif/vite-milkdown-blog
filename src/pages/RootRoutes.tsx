import AdminLayout from '@/layouts/Admin';
import HomeLayout from '@/layouts/Home';
import AdminRoutes from '@/pages/Admin/routes';
import HomeRoutes from '@/pages/Home/routes';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const RootRoutes = () => {
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

const Auth = (props) => {
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
  } = props;

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

  return !isLoading && element;
};

const MobxAuth = inject('AdminStore', 'AppStore')(observer(Auth));

/**
 *  转化route
 */
const T = (routes) => {
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
      const route = {
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
