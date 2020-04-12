import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { fetchTasksSuccess, fetchTasks, fetchTasksFailed } from './actions';
import { IState } from './interfaces';

const INITIAL_STATE: IState = {
  isFetching: false,
  data: { tasks: [], total: 0 },
  errorMessage: '',
};

const reducer = reducerWithInitialState<IState>(INITIAL_STATE)
  .case(fetchTasks, state => ({
    ...state,
    isFetching: true,
  }))
  .case(fetchTasksSuccess, (state, payload) => ({
    ...state,
    isFetching: false,
    errorMessage: '',
    data: payload,
  }))
  .case(fetchTasksFailed, (state, payload) => ({
    ...state,
    isFetching: false,
    errorMessage: payload,
  }));

export default reducer;
