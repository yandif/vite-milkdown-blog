import NoMatch from '@/components/NoMatch';
import React, { useCallback } from 'react';
import { HashRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import routes from './Page/routes';

const Admin = ({ match, adminStore }) => {
  const { data, setUser } = adminStore;

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
      <Switch>
        {routes.map(route => (
          <Route
            exact={route.exact}
            path={match.url + route.path}
            render={props => onEnter(route, props)}
          />
        ))}
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default inject('adminStore')(observer(withRouter(Admin)));
