import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTask } from 'redux/modules/task/actions';
import { getIsTaskFetching, getTaskData } from 'redux/modules/task/selectors';
import { getTasksData } from 'redux/modules/tasks/selectors';

const TaskDetails: FunctionComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isTaskLoading = useSelector(getIsTaskFetching);
  const currentTask = useSelector(getTaskData);

  useEffect(() => {
    dispatch(fetchTask({ id }));
  }, [id]);

  if (isTaskLoading) {
    return <h1>Loading...</h1>;
  }

  const { title, description } = { ...currentTask };

  return (
    <>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </>
  );
};

export default TaskDetails;
