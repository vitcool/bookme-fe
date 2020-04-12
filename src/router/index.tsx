import React from 'react';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import history from 'helpers/history';

import {
  HOME,
  ABOUT,
  LOGIN,
  SIGN_UP,
  LIST_TASKS,
  CREATE_TASK,
} from 'constants/routes';

import { getUserToken, getIsUserTasker } from 'redux/modules/auth/selectors';

import Home from 'pages/Home';
import About from 'pages/About';
import Login from 'pages/Login';
import SignUp from 'pages/Signup';
import ListTasks from 'pages/ListTasks';

const Routes = () => {
  const isAuth = !!useSelector(getUserToken);
  const isUserTasker = useSelector(getIsUserTasker);

  return (
    <Router history={history}>
      <Switch>
        <Route
          render={() => (
            <Switch>
              {isAuth &&
                (isUserTasker ? (
                  <Switch>
                    <Route path={LIST_TASKS} component={ListTasks}/>
                    <Route path={HOME} component={Home} exact/>

                    <Redirect to={LIST_TASKS} />
                  </Switch>
                ) : (
                  <Switch>
                    <Route path={CREATE_TASK} component={About}  />
                    <Route path={HOME} component={Home} exact />

                    <Redirect to={LIST_TASKS} />
                  </Switch>
                ))}
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
