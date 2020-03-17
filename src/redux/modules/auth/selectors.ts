import { ApplicationState } from 'redux/reducers';

export const getLoginError = (state: ApplicationState) => state.auth.loginError;
export const getIsLoginPending = (state: ApplicationState) => state.auth.isLoginPending;
export const getUserToken = (state: ApplicationState) => state.auth.token;
