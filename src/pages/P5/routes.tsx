import { Route } from '../RootRoutes';
import P0 from './index';
import P1 from './p1';
import P2 from './p2';

const routes: Route[] = [
  {
    path: '',
    element: <P0 />,
  },
  {
    path: '1',
    element: <P1 />,
  },
  {
    path: '2',
    element: <P2 />,
  }
];

export default routes;
