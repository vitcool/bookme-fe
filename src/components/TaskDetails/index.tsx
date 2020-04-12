import React, { FunctionComponent } from 'react';
import { useParams} from "react-router";

const TaskDetails: FunctionComponent = () => {
  const { id } = useParams();
  return <h1>Hello, its task with id {id}</h1>;
};

export default TaskDetails;
