import { ApplicationState } from 'redux/reducers';

export const getIsTasksFetching = (state: ApplicationState) => state.tasks.isFetching;
export const getTasksData = (state: ApplicationState) => state.tasks.data;
export const getTasksErrorMessage = (state: ApplicationState) => state.tasks.errorMessage;
