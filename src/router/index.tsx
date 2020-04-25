import React, { FunctionComponent } from 'react';
import { Switch, Router, Route } from 'react-router-dom';

import history from 'helpers/history';

import MainRouter from './main';

const Routes: FunctionComponent = () => (
  <Router history={history}>
    <Switch>
      <Route render={(props) => <MainRouter {...props} />} />
    </Switch>
  </Router>
);

export default Routes;
