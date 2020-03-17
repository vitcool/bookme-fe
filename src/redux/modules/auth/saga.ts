import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

import { postRequest } from 'api';

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  LOGOUT_REQUEST_FAILED,
  LOGOUT_REQUEST,
} from './actions';

const loginApiRequest = (params: object) => postRequest('/users/login', params);

function* loginRequestWorker({
  payload,
}: ReturnType<typeof LOGIN_REQUEST>): SagaIterator {
  try {
    const { email, password } = payload;
    const response: any = yield call(loginApiRequest, { email, password });
    if (response && response.ok) {
      const data = yield call([response, response.json]);
      yield put(LOGIN_REQUEST_SUCCESS(data));
    } else {
      yield put(LOGIN_REQUEST_FAILED('Fetching is failed'));
    }
  } catch (e) {
    yield put(LOGIN_REQUEST_FAILED(e.toString()));
  }
}

function* logoutRequestWorker(): SagaIterator {
  try {
    // TOD add logout when it will be possible via API
    console.log("LOGOUT REQUEST");
  } catch (e) {
    yield put(LOGOUT_REQUEST_FAILED(e.toString()));
  }
}

export default function* root(): SagaIterator {
  yield takeEvery(LOGIN_REQUEST, loginRequestWorker);
  yield takeEvery(LOGOUT_REQUEST, logoutRequestWorker);
}
