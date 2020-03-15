import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

import styles from './index.module.scss';
import { LOGIN_REQUEST } from 'redux/modules/auth/actions';

const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <Button onClick={handleButtonClick}>Log in</Button>
    </div>
  );
};

export default LoginForm;
