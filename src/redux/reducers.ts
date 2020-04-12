import { Reducer, combineReducers } from 'redux';

import applicationReducer from './modules/application/reducer';
import postsReducer from './modules/posts/reducer';
import authReducer from './modules/auth/reducer';
import tasksReducer from './modules/tasks/reducer';

import { IState as IApplicationState } from './modules/application/interfaces';
import { IState as IPostsState } from './modules/posts/interfaces';
import { IState as IAuthState } from './modules/auth/interfaces';
import { IState as ITasksState } from './modules/tasks/interfaces';

export interface ApplicationState {
  application: IApplicationState;
  posts: IPostsState;
  auth: IAuthState;
  tasks: ITasksState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  application: applicationReducer,
  posts: postsReducer,
  auth: authReducer,
  tasks: tasksReducer,
});

export default reducers;
