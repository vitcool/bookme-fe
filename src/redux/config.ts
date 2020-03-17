import { createStore, applyMiddleware, combineReducers, Reducer, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, PersistPartial } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/es/storage';

import reducers from './reducers';
import sagas from './sagas';
import { setIsStarted } from './modules/application/actions';
import authReducer from './modules/auth/reducer';

import { IState as IApplicationState } from './modules/application/interfaces';
import { IState as IPostsState } from './modules/posts/interfaces';
import { IState as IAuthState } from './modules/auth/interfaces';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['application'],
};

export interface ApplicationState {
  application: IApplicationState;
  posts: IPostsState;
  auth: IAuthState;
}

const persistedReducer = persistReducer(persistConfig, reducers);
const sageMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sageMiddleware)));
const state = store.getState();

const persistor = persistStore(store, {}, () => store.dispatch(setIsStarted(state)));

sageMiddleware.run(sagas);

export default { store, persistor };
