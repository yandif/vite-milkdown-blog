const routes = [
  {
    path: '',
    auth: true,
    element: 100000,
  },
  {
    path: 'login',
    element: <h1>登录</h1>,
    hideHeader: true,
  },
  {
    path: '*',
    element: 404,
  },
];

export default routes;
