import asyncRouter from '@/components/asyncRouter';

import { Route } from '../RootRoutes';

const Login = asyncRouter(() => import('./Login'));

const routes: Route[] = [
  {
    path: '',
    element: <h1>首页</h1>,
    auth: true,
  },
  {
    path: 'home',
    element: <h1>首页</h1>,
    auth: true,
  },
  {
    path: 'login',
    element: <Login />,
    hideHeader: true,
    hideSidebar: true,
  },
  {
    path: '*',
    element: <h1>404</h1>,
  }
];

export default routes;
