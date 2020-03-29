import React, { FunctionComponent } from 'react';

import SignUpForm from 'components/SignUpForm';

import styles from './index.module.scss';

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
