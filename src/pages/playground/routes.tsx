import { Button } from 'antd';
import { Link, Outlet } from 'react-router-dom';

import asyncRouter from '@/components/asyncRouter';
import { Route } from '@/components/Routes';

const arr: any[] = [
  asyncRouter(() => import('./Play1')),
  asyncRouter(() => import('./Play2')),
  asyncRouter(() => import('./Play3')),
  asyncRouter(() => import('./Play4')),
  asyncRouter(() => import('./Play5')),
  asyncRouter(() => import('./Play6')),
  asyncRouter(() => import('./Play7')),
  asyncRouter(() => import('./Play8')),
  asyncRouter(() => import('./Play9')),
  asyncRouter(() => import('./Play10')),
  asyncRouter(() => import('./Play11')),
  asyncRouter(() => import('./Play12')),
  asyncRouter(() => import('./Play13')),
  asyncRouter(() => import('./Play14')),
  asyncRouter(() => import('./Play15')),
];

function PlayGroundLayout() {
  return (
    <div style={{ marginTop: '5px' }}>
      {arr.map((_, i) => <Link key={i} to={'' + (i + 1)}> <Button>{i + 1} </Button></Link>)}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

const routes: Route =
{
  path: 'playground',
  element: <PlayGroundLayout />,
  children: arr.map((Play, i) => ({ path: '' + (i + 1), element: <Play /> })),
};

export default routes;
