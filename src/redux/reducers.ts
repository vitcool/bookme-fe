import { Reducer, combineReducers } from 'redux';

import applicationReducer from './modules/application/reducer';
import postsReducer from './modules/posts/reducer';
import authReducer from './modules/auth/reducer';

import { IState as IApplicationState } from './modules/application/interfaces';
import { IState as IPostsState } from './modules/posts/interfaces';
import { IState as IAuthState } from './modules/auth/interfaces';

export interface ApplicationState {
  application: IApplicationState;
  posts: IPostsState;
  auth: IAuthState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  application: applicationReducer,
  posts: postsReducer,
  auth: authReducer
});

export default reducers;
