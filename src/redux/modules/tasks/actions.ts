import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('tasks');

export const fetchTasks = actionCreator<any>('FETCH_TASKS');

export const fetchTasksSuccess = actionCreator<any>('FETCH_TASKS_SUCCESS');

export const fetchTasksFailed = actionCreator<any>('FETCH_TASKS_FAILED');
