import { ApplicationState } from 'redux/reducers';

export const getLoginError = (state: ApplicationState) => state.auth.loginError;
export const getIsLoginPending = (state: ApplicationState) => state.auth.isLoginPending;
export const getUserToken = (state: ApplicationState) => state.auth.token;
export const getIsUserTasker = (state: ApplicationState) => state.auth.user ? state.auth.user.isTasker : false;


export const getSignUpError = (state: ApplicationState) => state.auth.signupError;
export const getIsSignUpPending = (state: ApplicationState) => state.auth.isSignUpPending;
