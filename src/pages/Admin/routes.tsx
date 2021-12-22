
const routes = [
  {
    path: '',
    element: 100000,
  },
  {
    path: 'login',
    element: 'login',
  },
  {
    path: ':id',
    element: 20000,
  },
  {
    path: '*',
    element: 4014,
  }
];

export default routes;
