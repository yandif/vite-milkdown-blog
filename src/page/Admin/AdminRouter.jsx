import asyncRouter from '@/components/asyncRouter';
import NoMatch from '@/components/NoMatch';
import { TOKEN } from '@/constants';
import AdminLayout from '@/Layout/AdminLayout';
import { Account } from '@/services';
import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const AccountView = asyncRouter(() => import('./Account'));

const AdminRouter = props => {
  const {
    adminStore: {
      data: { user },
      setUser,
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
  registerRoute({ path: '/system/account', component: AccountView, auth: true });
  registerRoute({ path: '*', component: NoMatch, auth: true });

  const hiddenPath = routes?.filter(({ hidden }) => hidden).map(({ path }) => path);

  const [checkUser, setCheckUser] = useState(false);
  useEffect(() => {
    (async () => {
      if (!user && !!localStorage.getItem(TOKEN)) {
        const { data } = await Account.getUserInfo();
        setUser(data);
      }
      setCheckUser(true);
    })();
  }, []);

  const onEnter = (route, props) => {
    if (user && pathname === '/admin/login') {
      return <Redirect to="/" />;
    }

    if (!user && route.auth) {
      return <Redirect to="/login" />;
    }

    return <route.component {...props} />;
  };

  return (
    checkUser && (
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
    )
  );
};

export default withRouter(inject('adminStore')(observer(AdminRouter)));
