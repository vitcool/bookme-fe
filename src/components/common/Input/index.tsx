import React, { FunctionComponent, ChangeEvent } from 'react';

import { IProps } from './interfaces';

import styles from './index.module.scss';

const Input: FunctionComponent<IProps> = (props: IProps) => {
  const { value, onChange, label, type = 'text' } = props;

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;
    onChange(value);
  };

  return (
    <div className={styles.input}>
      {label ? <label>{label}</label> : null}
      <input value={value} type={type} onChange={handleValueChange} />
    </div>
  );
};

export default Input;
