import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('current-task');

export const fetchTask = actionCreator<any>('FETCH_TASK');

export const fetchTaskSuccess = actionCreator<any>('FETCH_TASK_SUCCESS');

export const fetchTaskFailed = actionCreator<any>('FETCH_TASK_FAILED');
