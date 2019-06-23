import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import store from 'core/store';
import Routes from 'routes';
import Home from 'pages/Home/components/Home';
import Hotel from 'pages/Hotel/containers/Hotel';

const Root = () => (
  <Router>
    <Switch>
      <Route path={Routes.Home} exact component={Home} />
      <Route path={Routes.Hotel} component={Hotel} />
      <Redirect to={Routes.Home} />
    </Switch>
  </Router>
);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
