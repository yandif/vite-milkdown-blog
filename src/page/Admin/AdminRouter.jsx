import React, { lazy, Suspense, useCallback } from 'react';
import NoMatch from '@/components/NoMatch';
import { inject, observer } from 'mobx-react';
import { HashRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import AdminLayout from '@/Layout/AdminLayout';
import asyncRouter from '@/components/asyncRouter';

const Home = asyncRouter(() => import('./Home'));
const Login = asyncRouter(() => import('./Login'));
const Account = asyncRouter(() => import('./Account'));

const AdminRouter = ({ match, adminStore }) => {
  const { data, setUser } = adminStore;

  const routes = [];
  const registerRoute = ({ path, component, exact = true, auth = false }) =>
    routes.push({ path, component, exact, auth });

  registerRoute({ path: '/login', component: Login });
  registerRoute({ path: '/', component: Home, auth: true });
  registerRoute({ path: '/home', component: Home, auth: true });
  registerRoute({ path: '/Account', component: Account, auth: true });

  const onEnter = useCallback((route, props) => {
    const userTemp = true;
    if (!userTemp && route.auth) {
      return <Redirect to={match.url + '/login'} />;
    }
    return <route.component {...props} a={1}/>;
  }, []);

  return (
    <Router>
      <AdminLayout>
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
      </AdminLayout>
    </Router>
  );
};

export default inject('adminStore')(observer(withRouter(AdminRouter)));
