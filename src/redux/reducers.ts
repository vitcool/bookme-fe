import { Reducer, combineReducers } from 'redux';

import applicationReducer from './modules/application/reducer';
import postsReducer from './modules/posts/reducer';
import authReducer from './modules/auth/reducer';
import tasksReducer from './modules/tasks/reducer';
import taskReducer from './modules/task/reducer';

import { IState as IApplicationState } from './modules/application/interfaces';
import { IState as IPostsState } from './modules/posts/interfaces';
import { IState as IAuthState } from './modules/auth/interfaces';
import { IState as ITasksState } from './modules/tasks/interfaces';
import { IState as ITaskState } from './modules/task/interfaces';

export interface ApplicationState {
  application: IApplicationState;
  posts: IPostsState;
  auth: IAuthState;
  tasks: ITasksState;
  currentTask: ITaskState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  application: applicationReducer,
  posts: postsReducer,
  auth: authReducer,
  tasks: tasksReducer,
  currentTask: taskReducer,
});

export default reducers;
