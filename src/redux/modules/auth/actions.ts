import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('auth');

export const LOGIN_REQUEST = actionCreator<any>('LOGIN_REQUEST');
export const LOGIN_REQUEST_FAILED = actionCreator<any>('LOGIN_REQUEST_FAILED');
export const LOGIN_REQUEST_SUCCESS = actionCreator<any>('LOGIN_REQUEST_SUCCESS');

export const LOGOUT_REQUEST = actionCreator<any>('LOGOUT_REQUEST');
export const LOGOUT_REQUEST_SUCCESS = actionCreator<any>('LOGOUT_REQUEST_SUCCESS');
export const LOGOUT_REQUEST_FAILED = actionCreator<any>('LOGOUT_REQUEST_FAILED');

export const LOGIN_DATA_RESET = actionCreator<any>('LOGIN_DATA_RESET');

export const SIGNUP_REQUEST = actionCreator<any>('SIGNUP_REQUEST');
export const SIGNUP_REQUEST_SUCCESS = actionCreator<any>('SIGNUP_REQUEST_SUCCESS');
export const SIGNUP_REQUEST_FAILED = actionCreator<any>('SIGNUP_REQUEST_FAILED');

export const SIGNUP_DATA_RESET = actionCreator<any>('SIGNUP_DATA_RESET');
