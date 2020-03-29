import React, { FunctionComponent, ChangeEvent } from 'react';

import { IProps } from './interfaces';

import styles from './index.module.scss';

const Input: FunctionComponent<IProps> = ({ checked, onChange, label, touched, error, name }: IProps) => {

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const showError = touched && error;

  return (
    <div className={styles.checkbox}>
      {label ? <label>{label}</label> : null}
      <input type="checkbox" name={name} checked={checked} onChange={handleValueChange}/>
      {showError ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};

export default Input;
