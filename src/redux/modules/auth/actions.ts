import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('auth');

export const LOGIN_REQUEST = actionCreator<any>('LOGIN_REQUEST');
export const LOGIN_REQUEST_FAILED = actionCreator<any>('LOGIN_REQUEST_FAILED');
export const LOGIN_REQUEST_SUCCESS = actionCreator<any>('LOGIN_REQUEST_SUCCESS');
