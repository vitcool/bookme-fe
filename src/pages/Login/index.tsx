import React, { FunctionComponent } from 'react';

import HeaderWrapper from 'components/common/HeaderWrapper';
import LoginForm from 'components/LoginForm';

const Login: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <LoginForm />
    </HeaderWrapper>
  )
};

export default Login;