import React from 'react';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import history from 'helpers/history';

import { HOME, ABOUT, LOGIN, SIGN_UP } from 'constants/routes';

import { getUserToken } from 'redux/modules/auth/selectors';

import Home from 'pages/Home';
import About from 'pages/About';
import Login from 'pages/Login';
import SignUp from 'pages/Signup';


const Routes = () => {
  const isAuth = !!useSelector(getUserToken);
  return (
    <Router history={history} >
      <Switch>
        <Route
          render={() => (
            <Switch>
              {isAuth && (
                <Switch>
                  <Route path={ABOUT} component={About} />
                  <Route path={HOME} component={Home} exact/>
                  <Redirect to={HOME} />
                </Switch>
              )}
              {!isAuth && (
                <Switch>
                  <Route path={LOGIN} component={Login} />
                  <Route path={SIGN_UP} component={SignUp} />
                  <Redirect to={LOGIN} />
                </Switch>
              )}
            </Switch>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
