import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

import { postRequest, postRequestWithToken } from 'api';

import history from 'helpers/history';
import { HOME, LOGIN, LIST_TASKS, CREATE_TASK } from 'constants/routes';

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  LOGOUT_REQUEST_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAILED,
} from './actions';

const loginApiRequest = (params: object) => postRequest('/users/login', params);
const logoutApiRequest = () => postRequestWithToken('/users/logout');
const signUpApiRequest = (params: object) => postRequest('/users', params);

function* loginRequestWorker({
  payload,
}: ReturnType<typeof LOGIN_REQUEST>): SagaIterator {
  try {
    const { email, password } = payload;
    const response: any = yield call(loginApiRequest, { email, password });
    if (response && response.ok) {
      const data = yield call([response, response.json]);
      const { user: { isTasker } } = data;
      const redirectTo = isTasker ? LIST_TASKS : CREATE_TASK;
      console.log('redirectTo', redirectTo);  
      history.push(redirectTo);
      yield put(LOGIN_REQUEST_SUCCESS(data));
    } else {
      yield put(LOGIN_REQUEST_FAILED('Login is failed'));
    }
  } catch (e) {
    yield put(LOGIN_REQUEST_FAILED(e.toString()));
  }
}

function* logoutRequestWorker(): SagaIterator {
  try {
    const response: any = yield call(logoutApiRequest);
    if (response && response.ok) {
      const data = yield call([response, response.text]);
      history.push(LOGIN);
      yield put(LOGOUT_REQUEST_SUCCESS(data));
    } else {
      yield put(LOGOUT_REQUEST_FAILED('Logout is failed'));
    }
  } catch (e) {
    yield put(LOGOUT_REQUEST_FAILED(e.toString()));
  }
}

function* signUpRequestWorker({
  payload,
}: ReturnType<typeof LOGIN_REQUEST>): SagaIterator {
  try {
    const response: any = yield call(signUpApiRequest, payload);
    if (response && response.ok) {
      const data = yield call([response, response.json]);
      history.push(HOME);
      yield put(SIGNUP_REQUEST_SUCCESS(data));
    } else {
      yield put(SIGNUP_REQUEST_FAILED('Signup is failed'));
    }
  } catch (e) {
    yield put(LOGIN_REQUEST_FAILED(e.toString()));
  }
}

export default function* root(): SagaIterator {
  yield takeEvery(LOGIN_REQUEST, loginRequestWorker);
  yield takeEvery(LOGOUT_REQUEST, logoutRequestWorker);
  yield takeEvery(SIGNUP_REQUEST, signUpRequestWorker);
}
