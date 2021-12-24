import { Route } from '../RootRoutes';

const routes: Route[] = [
  {
    path: '',
    element: <div>100000</div>,
  },
  {
    path: 'login',
    element: <div>login</div>,
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
