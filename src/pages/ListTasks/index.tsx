import React, { FunctionComponent } from 'react';

import HeaderWrapper from 'components/common/HeaderWrapper';
import ListTasksComponent from 'components/ListTasks';


const ListTasks: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <ListTasksComponent />
    </HeaderWrapper>
  );
};

export default ListTasks;
