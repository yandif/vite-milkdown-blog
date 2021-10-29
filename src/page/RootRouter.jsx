import React, { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';
import NoMatch from '@/components/NoMatch';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const Blog = lazy(() => import('@/page/Blog'));
const Demo = lazy(() => import('@/page/Demo'));
const TestApi = lazy(() => import('@/page/TestApi'));
const AdminRouter = lazy(() => import('@/page/Admin/AdminRouter'));

const RootRouter = () => {
  const routes = [];
  const registerRoute = (path, component, exact = true) => routes.push({ path, component, exact });

  registerRoute('/demo', Demo);
  registerRoute('/blog', Blog);
  registerRoute('/test', TestApi);
  registerRoute('/admin', AdminRouter, false);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map(route => (
            <Route exact={route.exact} key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))}
          <Route path="*" component={NoMatch} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RootRouter;
