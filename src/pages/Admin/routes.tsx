import asyncRouter from '@/components/asyncRouter';

import { Route } from '../RootRoutes';

const Login = asyncRouter(() => import('./Login'));

const routes: Route[] = [
  {
    path: '',
    element: <div>100000</div>,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: ':id',
    element: <div>100000</div>,
  },
  {
    path: '*',
    element: <div>100000</div>,
  }
];

export default routes;
