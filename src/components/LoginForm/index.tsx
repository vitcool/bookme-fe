import React, { FunctionComponent, useState } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

import styles from './index.module.scss';

const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = () => {
    console.log('Button is clicked');
  }

  return (
    <div className={styles.formWrapper}>
      <Input value={email} onChange={setEmail} />
      <Input value={password} onChange={setPassword} />
      <Button onClick={handleButtonClick}>Text</Button>
    </div>
  )
};

export default LoginForm;
