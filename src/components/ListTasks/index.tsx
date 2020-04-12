import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from 'redux/modules/tasks/actions';
import {
  getIsTasksFetching,
  getTasksData,
} from 'redux/modules/tasks/selectors';

import ITask from 'models/Task';

import styles from './index.module.scss';

const ListTasks: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsTasksFetching);
  const tasksData = useSelector(getTasksData);
  console.log('tasksData', tasksData);

  useEffect(() => {
    dispatch(fetchTasks({}));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.wrapper}>
      <h1>List of tasks</h1>
      <div className={styles.listWrapper}>
      {tasksData.tasks.map(({ _id, title, description }: ITask) => (
        <div key={_id} className={styles.taskWrapper}>
          <h4>{title}</h4>
          <h6>{description}</h6>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ListTasks;
