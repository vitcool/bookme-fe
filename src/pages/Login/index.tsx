import React, { FunctionComponent } from 'react';

import LoginForm from 'components/LoginForm';

import AuthWrapper from 'components/AuthWrapper';

const Login: FunctionComponent = () => {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
};

export default Login;
