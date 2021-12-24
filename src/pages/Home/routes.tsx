import { Route } from '../RootRoutes';
function A() {
  return <div>123</div>;
}

const routes: Route[] = [
  {
    path: '',
    auth: true,
    element: <A />,
  },
  {
    path: 'login',
    element: <h1>登录</h1>,
    hideHeader: true,
  },
  {
    path: '*',
    element: <h1>登录</h1>,
  },
];

export default routes;
