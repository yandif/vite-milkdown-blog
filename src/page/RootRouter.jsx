import NoMatch from '@/components/NoMatch';
import AdminRouter from '@/page/Admin/AdminRouter';
import Blog from '@/page/Blog';
import Demo from '@/page/Demo';
import TestApi from '@/page/TestApi';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const RootRouter = () => {
  const routes = [];
  const registerRoute = (path, component, exact = true) => routes.push({ path, component, exact });

  registerRoute('/demo', Demo);
  registerRoute('/blog', Blog);
  registerRoute('/test', TestApi);
  registerRoute('/admin', AdminRouter, false);

  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route exact={route.exact} key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default RootRouter;
