import { Route } from '@/components/Routes';

import P0 from './index';
import P1 from './p1';
import P2 from './p2';
import P3 from './P3';

const routes: Route = {
  path: '/p5',
  children: [
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
    },
    {
      path: '3',
      element: <P3 />,
    }
  ],
};

export default routes;
