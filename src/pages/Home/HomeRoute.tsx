import { useRoutes } from 'react-router-dom';
const RootRoute = () => {
  const routing = useRoutes({
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to='/app/dashboard' /> },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  });
  return routing;
};
export default RootRoute;
