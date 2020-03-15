import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
} from './actions';
import { IState } from './interfaces';

const INITIAL_STATE: IState = {
  isLoginPending: false,
  loginError: '',
  token: '',
};

const reducer = reducerWithInitialState<IState>(INITIAL_STATE)
  .case(LOGIN_REQUEST, state => ({
    ...state,
    loginError: '',
    isLoginPending: true,
  }))
  .case(LOGIN_REQUEST_SUCCESS, (state, payload) => ({
    ...state,
    token: payload,
    loginError: '',
    isLoginPending: false,
  }))
  .case(LOGIN_REQUEST_FAILED, (state, payload) => ({
    ...state,
    loginError: payload,
    isLoginPending: false,
  }));

export default reducer;
