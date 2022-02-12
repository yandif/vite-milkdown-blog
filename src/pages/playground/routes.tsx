import { Route } from '@/components/Routes';

import Play1 from './Play1';
import Play2 from './Play2';

const routes: Route =
{
  path: 'playground',
  children: [
    {
      path: '1',
      element: <Play1 />,
    },
    {
      path: '2',
      element: <Play2 />,
    }
  ],
};

export default routes;
