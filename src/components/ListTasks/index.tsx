import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from 'redux/modules/tasks/actions';
import {
  getIsTasksFetching,
  getTasksData,
} from 'redux/modules/tasks/selectors';

import Button from 'components/common/Button';

import ITask from 'models/Task';

import history from 'helpers/history';
import { TASK_DETAILS } from 'constants/routes';

import styles from './index.module.scss';

const ListTasks: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsTasksFetching);
  const tasksData = useSelector(getTasksData);

  useEffect(() => {
    dispatch(fetchTasks({}));
  }, []);

  const handleTaskDetailsClick: Function = useCallback((id): void => {
    history.push(`${TASK_DETAILS}/${id}`);
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
            <div className={styles.infoWrapper}>
              <h4>{title}</h4>
              <h6>{description}</h6>
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={() => handleTaskDetailsClick(_id)}>Show details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTasks;
