import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
  LOGIN_DATA_RESET,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_FAILED,
  SIGNUP_REQUEST_SUCCESS,
  SIGNUP_DATA_RESET
} from './actions';
import { IState, ISuccess } from './interfaces';

const INITIAL_STATE: IState = {
  isLoginPending: false,
  loginError: '',
  token: '',
  isLogoutPending: false,
  signupError: '',
  isSignUpPending: false,
  user: null,
};

const reducer = reducerWithInitialState<IState>(INITIAL_STATE)
  .case(LOGIN_REQUEST, state => ({
    ...state,
    loginError: '',
    isLoginPending: true,
  }))
  .case(LOGIN_REQUEST_SUCCESS, (state: IState, { token, user }: ISuccess) => ({
    ...state,
    token,
    user,
    loginError: '',
    isLoginPending: false,
  }))
  .case(LOGIN_REQUEST_FAILED, (state: IState, payload: string) => ({
    ...state,
    loginError: payload,
    isLoginPending: false,
  }))
  .case(LOGOUT_REQUEST, (state: IState) => ({
    ...state,
    isLogoutPending: true,
  }))
  .case(LOGOUT_REQUEST_SUCCESS, (state: IState) => ({
    ...state,
    isLogoutPending: true,
    token: INITIAL_STATE.token,
    user: INITIAL_STATE.user,
  }))
  .case(LOGIN_DATA_RESET, (state: IState) => ({
    ...state,
    isLoginPending: INITIAL_STATE.isLoginPending,
    loginError: INITIAL_STATE.loginError
  }))
  .case(SIGNUP_REQUEST, (state: IState) => ({
    ...state,
    isSignUpPending: true,
  }))
  .case(SIGNUP_REQUEST_SUCCESS, (state: IState, { token, user }: ISuccess) => ({
    ...state,
    token,
    user,
    isSignUpPending: false,
  }))
  .case(SIGNUP_REQUEST_FAILED, (state: IState, payload: string) => ({
    ...state,
    isSignUpPending: false,
    signupError: payload,
  }))
  .case(SIGNUP_DATA_RESET, (state: IState) => ({
    ...state,
    isSignUpPending: INITIAL_STATE.isSignUpPending,
    signupError: INITIAL_STATE.signupError,
  }))

export default reducer;
