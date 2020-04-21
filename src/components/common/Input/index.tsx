import React, { FunctionComponent, ChangeEvent } from 'react';

import { IProps } from './interfaces';

import styles from './index.module.scss';

const Input: FunctionComponent<IProps> = ({
  value,
  onChange,
  label,
  type = 'text',
  touched,
  error,
  name,
  placeholder,
}: IProps) => {
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const showError = touched && error;

  return (
    <div className={styles.input}>
      {label ? <label>{label}</label> : null}
      <input
        className={showError ? styles.error : ''}
        name={name}
        value={value}
        type={type}
        onChange={handleValueChange}
        placeholder={placeholder}
      />
      {showError ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};

export default Input;
