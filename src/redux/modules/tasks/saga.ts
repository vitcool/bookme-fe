import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

import { fetchTasks, fetchTasksSuccess, fetchTasksFailed } from './actions';
import { getRequestWithToken } from 'api';

const fetchPostsData = () => getRequestWithToken('/tasks');

function* fetchTasksWorker(): SagaIterator {
  try {
    const response = yield call(fetchPostsData);
    if (response && response.ok) {
      const data = yield call([response, response.json]);
      yield put(fetchTasksSuccess(data));
    } else {
      yield put(fetchTasksFailed('Fetching is failed'));
    }
  } catch (error) {
    yield put(fetchTasksFailed(error.toString()));
  }
}

export default function* root(): SagaIterator {
  yield takeEvery(fetchTasks, fetchTasksWorker);
}
