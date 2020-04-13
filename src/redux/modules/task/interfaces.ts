import ITask from 'models/Task';

export interface IState {
  isFetching: boolean;
  data: ITask | null;
  errorMessage: string;
}

export interface IPayload {
  payload: IParams
}

export interface IParams {
  id: string;
}
