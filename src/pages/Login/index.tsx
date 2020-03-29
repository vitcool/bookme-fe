import React, { FunctionComponent } from 'react';

import LoginForm from 'components/LoginForm';

import styles from './index.module.scss';

const Login: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  )
};

export default Login;