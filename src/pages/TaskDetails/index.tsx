import React, { FunctionComponent } from 'react';

import HeaderWrapper from 'components/common/HeaderWrapper';
import TaskDetailsComponent from 'components/TaskDetails';


const ListTasks: FunctionComponent = () => {
  return (
    <HeaderWrapper type="main">
      <TaskDetailsComponent />
    </HeaderWrapper>
  );
};

export default ListTasks;