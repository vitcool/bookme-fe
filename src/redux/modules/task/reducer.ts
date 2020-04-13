import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { fetchTaskSuccess, fetchTask, fetchTaskFailed } from './actions';
import { IState } from './interfaces';

const INITIAL_STATE: IState = {
  isFetching: false,
  data: null,
  errorMessage: '',
};

const reducer = reducerWithInitialState<IState>(INITIAL_STATE)
  .case(fetchTask, state => ({
    ...state,
    isFetching: true,
  }))
  .case(fetchTaskSuccess, (state, payload) => ({
    ...state,
    isFetching: false,
    errorMessage: '',
    data: payload,
  }))
  .case(fetchTaskFailed, (state, payload) => ({
    ...state,
    isFetching: false,
    errorMessage: payload,
  }));

export default reducer;
