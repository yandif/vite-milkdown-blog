import NoMatch from '@/components/NoMatch';
import AdminRouter from '@/page/Admin/AdminRouter';
import Blog from '@/page/Blog';
import Demo from '@/page/Demo';
import TestApi from '@/page/TestApi';
import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const RootRouter = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      redirect: '/admin/',
    },
  ];
  const registerRoute = (path, component, exact = true) => routes.push({ path, component, exact });

  registerRoute('/demo', Demo);
  registerRoute('/blog', Blog);
  registerRoute('/test', TestApi);
  registerRoute('/admin', AdminRouter, false);

  const onEnter = (route, props) => {
    if (route.redirect) {
      return <Redirect to={route.redirect} />;
    }
    return <route.component {...props} />;
  };

  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={props => onEnter(route, props)}
          />
        ))}
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default RootRouter;
