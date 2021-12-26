import { Route } from '../RootRoutes';

function A() {
  return <h1>首页</h1>;
}

const routes: Route[] = [
  {
    path: '',
    element: <A />,
  }
];

export default routes;
