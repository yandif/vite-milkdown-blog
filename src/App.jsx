import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MessageProvider from './components/Message';
import NoMatch from './components/NoMatch';
import routes from './page/routes';
import MobxProvider from './stores';

function App() {
  return (
    <MobxProvider>
      <MessageProvider>
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
      </MessageProvider>
    </MobxProvider>
  );
}

export default App;
