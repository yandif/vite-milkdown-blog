import asyncRouter from '@/components/asyncRouter';
import NoMatch from '@/components/NoMatch';
import AdminLayout from '@/Layout/AdminLayout';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const Account = asyncRouter(() => import('./Account'));

const AdminRouter = props => {
  const {
    adminStore: {
      data: { userBasicInfo },
      setData,
    },
    history: {
      location: { pathname },
    },
  } = props;

  const routes = [];
  const registerRoute = ({ path, component, exact = true, auth = false, hidden = false }) =>
    routes.push({ path, component, exact, auth, hidden });

  registerRoute({ path: '/', component: Home, auth: true });
  registerRoute({ path: '/home', component: Home, auth: true });
  registerRoute({ path: '/login', component: Login, hidden: true });
  registerRoute({ path: '/system/account', component: Account, auth: true });
  registerRoute({ path: '*', component: NoMatch, auth: true });

  const hiddenPath = routes?.filter(({ hidden }) => hidden).map(({ path }) => path);

  const onEnter = (route, props) => {
    if (userBasicInfo && pathname === '/admin/login') {
      return <Redirect to="/" />;
    }

    if (!userBasicInfo && route.auth) {
      return <Redirect to="/login" />;
    }

    return <route.component {...props} />;
  };

  return (
    <Router basename="admin">
      <AdminLayout hiddenPath={hiddenPath} setData={setData}>
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

export default withRouter(inject('adminStore')(observer(AdminRouter)));
