import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILED,
} from './actions';
import { IState } from './interfaces';

const INITIAL_STATE: IState = {
  isLoginPending: false,
  loginError: '',
  token: '',
  isLogoutPending: false,
};

const reducer = reducerWithInitialState<IState>(INITIAL_STATE)
  .case(LOGIN_REQUEST, state => ({
    ...state,
    loginError: '',
    isLoginPending: true,
  }))
  .case(LOGIN_REQUEST_SUCCESS, (state, { token }) => ({
    ...state,
    token,
    loginError: '',
    isLoginPending: false,
  }))
  .case(LOGIN_REQUEST_FAILED, (state, payload) => ({
    ...state,
    loginError: payload,
    isLoginPending: false,
  }))
  .case(LOGOUT_REQUEST, (state) => ({
    ...state,
    isLogoutPending: true,
  }))
  .case(LOGOUT_REQUEST_SUCCESS, (state) => ({
    ...state,
    isLogoutPending: true,
    token: INITIAL_STATE.token,
  }));

export default reducer;
