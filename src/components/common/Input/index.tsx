import React, { FunctionComponent, ChangeEvent } from 'react';

import { IProps } from './interfaces';

const Input: FunctionComponent<IProps> = (props: IProps) => {
  const { value, onChange } = props;

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;
    onChange(value);
  };

  return (
    <>
      <input value={value} onChange={handleValueChange} />
    </>
  );
};

export default Input;
