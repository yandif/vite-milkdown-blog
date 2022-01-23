import { Route } from '@/components/Routes';
import HomeLayout from '@/layouts/Home';

function A() {
  return <h1>首页</h1>;
}

const routes: Route = {
  path: '/',
  element: <HomeLayout />,
  children: [
    {
      path: '',
      element: <A />,
    }
  ],
};

export default routes;
