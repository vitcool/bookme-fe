import React, { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Error from 'components/common/Error';

import { getLoginError, getIsLoginPending } from 'redux/modules/auth/selectors';
import { LOGIN_REQUEST } from 'redux/modules/auth/actions';

import styles from './index.module.scss';

const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginError = useSelector(getLoginError);
  const isLoginPending = useSelector(getIsLoginPending);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(LOGIN_REQUEST({ email, password }));
  };

  return (
    <div className={styles.formWrapper}>
      <h4 className={styles.formTitle}>Log in</h4>
      <Input value={email} onChange={setEmail} label="Email" />
      <Input
        value={password}
        onChange={setPassword}
        label="Password"
        type="password"
      />
      <Button onClick={handleButtonClick} disabled={isLoginPending}>
        Log in
      </Button>
      {loginError && (
        <Error text={'Login ar password is incorrect.Please try again'} />
      )}
    </div>
  );
};

export default LoginForm;
