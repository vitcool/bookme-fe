import React, { FunctionComponent, useState } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = () => {
    console.log('Button is clicked');
  }

  return (
    <>
      <Input value={email} onChange={setEmail} />
      <Input value={password} onChange={setPassword} />
      <Button onClick={handleButtonClick}>Text</Button>
    </>
  )
};

export default LoginForm;
