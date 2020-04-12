import React, { FunctionComponent } from 'react';

import HeaderWrapper from 'components/common/HeaderWrapper';
import CreateTaskComponent from 'components/CreateTask';


const CreateTask: FunctionComponent = () => {
  return (
    <HeaderWrapper type="main">
      <CreateTaskComponent />
    </HeaderWrapper>
  );
};

export default CreateTask;
