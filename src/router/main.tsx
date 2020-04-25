import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  HOME,
  ABOUT,
  LOGIN,
  SIGN_UP,
  CREATE_TASK,
  TASK_DETAILS,
} from 'constants/routes';

import { getUserToken, getIsUserTasker } from 'redux/modules/auth/selectors';

import Home from 'pages/Home';
import About from 'pages/About';
import Login from 'pages/Login';
import SignUp from 'pages/Signup';
import TaskDetails from 'pages/TaskDetails';

interface ILocation {
  pathname: String;
}

interface IProps {
  location: ILocation;
}

const Main: FunctionComponent<IProps> = ({ location: { pathname }}: any) => {
  const isAuth = !!useSelector(getUserToken);
  const isUserTasker = useSelector(getIsUserTasker);

  return (
    <Switch>
      {isAuth &&
        (isUserTasker ? (
          <Switch>
            <Route path={`${TASK_DETAILS}/:id`} component={TaskDetails} />
            <Route path={ABOUT} component={About} exact />
            <Route path={HOME} component={Home} exact />
            <Redirect to={HOME} />
          </Switch>
        ) : (
          <Switch>
            <Route path={CREATE_TASK} component={About} />
            <Route path={`${TASK_DETAILS}/:id`} component={TaskDetails} />
            <Route path={ABOUT} component={About} exact />
            <Route path={HOME} component={Home} exact />
            <Redirect to={HOME} />
          </Switch>
        ))}
      {!isAuth && (
        <Switch>
          <Route path={LOGIN} component={Login} />
          <Route path={SIGN_UP} component={SignUp} />
          <Route path={HOME} component={Home} exact />
          <Route path={ABOUT} component={About} exact />
          <Redirect to={LOGIN} />
        </Switch>
      )}
    </Switch>
  );
};

export default Main;
