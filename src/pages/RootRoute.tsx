import { useRoutes } from 'react-router-dom';
const RootRoute = ({ auth }) => {
  const routing = useRoutes([
    {
      path: '/',
      children: [
        {
          path: '123',
          element: (
            <div>
              {!!auth}
              {JSON.stringify(auth)}
            </div>
          ),
        },
      ],
    },
  ]);
  return routing;
};
export default RootRoute;
