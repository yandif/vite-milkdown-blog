import { Navigate } from 'react-router-dom';

import asyncRouter from '@/components/asyncRouter';
import { Route } from '@/components/Routes';
import AdminLayout from '@/layouts/Admin';

const Login = asyncRouter(() => import('./Login'));
const Account = asyncRouter(() => import('./Account'));
const Role = asyncRouter(() => import('./Role'));
const Menu = asyncRouter(() => import('./Menu'));
const Power = asyncRouter(() => import('./Menu'));

const routes: Route = {
  path: '/admin',
  element: <AdminLayout baseName='/admin' />,
  children: [
    {
      path: '',
      element: <Navigate to="home" replace />,
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
      path: 'system',
      children: [
        {
          path: 'account',
          element: <Account />,
          auth: true,
        },
        {
          path: 'role',
          element: <Role />,
          auth: true,
        },
        {
          path: 'power',
          element: <Power />,
          auth: true,
        },
        {
          path: 'menu',
          element: <Menu />,
          auth: true,
        },
      ],
    },
    {
      path: '*',
      element: <h1>404</h1>,
      hideHeader: true,
      hideSidebar: true,
    }
  ],
};

export default routes;
