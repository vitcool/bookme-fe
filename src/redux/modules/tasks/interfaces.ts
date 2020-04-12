import ITask from 'models/Task';

export interface IState {
  isFetching: boolean;
  data: IData;
  errorMessage: string;
}

export interface IData {
  tasks: ITask[];
  total: number;
}
