import { ApplicationState } from 'redux/reducers';

export const getIsTaskFetching = (state: ApplicationState) => state.currentTask.isFetching;
export const getTaskData = (state: ApplicationState) => state.currentTask.data;
export const getTaskErrorMessage = (state: ApplicationState) => state.currentTask.errorMessage;
