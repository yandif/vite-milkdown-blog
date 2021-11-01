import asyncRouter from '@/components/asyncRouter';
import NoMatch from '@/components/NoMatch';
import AdminLayout from '@/Layout/AdminLayout';
import { inject, observer } from 'mobx-react';
import React, { useCallback, useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Login from './Login';

const Home = asyncRouter(() => import('./Home'));
const Account = asyncRouter(() => import('./Account'));

const AdminRouter = ({ match, adminStore }) => {
  const { data, setUser } = adminStore;

  const routes = [];
  const registerRoute = ({ path, component, exact = true, auth = false, hidden = false }) =>
    routes.push({ path, component, exact, auth, hidden });

  registerRoute({ path: '/', component: Home, auth: true });
  registerRoute({ path: '/home', component: Home, auth: true });
  registerRoute({ path: '/login', component: Login, hidden: true });
  registerRoute({ path: '/system/account', component: Account, auth: true });
  registerRoute({ path: '*', component: NoMatch, auth: true });

  const hiddenPath = routes?.filter(({ hidden }) => hidden).map(({ path }) => path);
  console.log(hiddenPath);
  const onEnter = useCallback((route, props) => {
    const userTemp = true;
    if (!userTemp && route.auth) {
      return <Redirect to={match.url + '/login'} />;
    }
    return <route.component {...props} />;
  }, []);

  return (
    <Router basename="admin">
      <AdminLayout hiddenPath={hiddenPath}>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              render={props => onEnter(route, props)}
            />
          ))}
        </Switch>
      </AdminLayout>
    </Router>
  );
};

export default inject('adminStore')(observer(withRouter(AdminRouter)));
