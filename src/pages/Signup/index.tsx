import React, { FunctionComponent } from 'react';

import SignUpForm from 'components/SignUpForm';

import AuthWrapper from 'components/AuthWrapper';

const SignUp: FunctionComponent = () => {
  return (
    <AuthWrapper >
      <SignUpForm />
    </AuthWrapper>
  );
};

export default SignUp;
