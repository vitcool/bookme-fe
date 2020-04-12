import React, { FunctionComponent } from 'react';

import HeaderWrapper from 'components/common/HeaderWrapper';
import ListTasksComponent from 'components/ListTasks';


const CreateTask: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <ListTasksComponent />
    </HeaderWrapper>
  );
};

export default CreateTask;
