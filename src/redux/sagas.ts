import { all } from 'redux-saga/effects';

import application from './modules/application/saga';
import posts from './modules/posts/saga';
import auth from './modules/auth/saga';
import tasks from './modules/tasks/saga';

export default function* root() {
  yield all([application(), posts(), auth(), tasks()]);
}
