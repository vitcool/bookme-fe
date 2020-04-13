import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

import { fetchTask, fetchTaskSuccess, fetchTaskFailed } from './actions';
import { getRequestWithToken } from 'api';
import { IPayload } from './interfaces';

const fetchTaskData = (id: string) => getRequestWithToken(`/task/${id}`);

function* fetchTaskWorker({ payload: { id } }: IPayload): SagaIterator {
  try {
    const response = yield call(fetchTaskData, id);
    if (response && response.ok) {
      const data = yield call([response, response.json]);
      yield put(fetchTaskSuccess(data));
    } else {
      yield put(fetchTaskFailed('Fetching is failed'));
    }
  } catch (error) {
    yield put(fetchTaskFailed(error.toString()));
  }
}

export default function* root(): SagaIterator {
  yield takeEvery(fetchTask, fetchTaskWorker);
}
