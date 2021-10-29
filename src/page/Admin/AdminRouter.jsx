import React, { lazy, Suspense, useCallback } from 'react';
import Loading from '@/components/Loading';
import NoMatch from '@/components/NoMatch';
import { inject, observer } from 'mobx-react';
import { HashRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';

const Demo = lazy(() => import('@/page/Demo'));

const AdminRouter = ({ match, adminStore }) => {
  const { data, setUser } = adminStore;
  
  const routes = [];
  const registerRoute = (path, component, exact = true, auth = false) =>
    routes.push({ path, component, exact, auth });

  registerRoute('/demo', Demo);
  registerRoute('/login', Demo);
  registerRoute('/account', Demo, true, true);

  const onEnter = useCallback((route, props) => {
    const userTemp = true;
    if (!userTemp && route.auth) {
      return <Redirect to={match.url + '/login'} />;
    }
    return <route.component {...props} />;
  }, []);

  return (
    <Router>
      <h1>Admin</h1>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${match.url}${route.path}`}
              render={props => onEnter(route, props)}
            />
          ))}
          <Route path="*" component={NoMatch} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default inject('adminStore')(observer(withRouter(AdminRouter)));
