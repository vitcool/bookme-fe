import React, { FunctionComponent, MouseEvent } from 'react';

import { IProps } from './interfaces';

import styles from './index.module.scss';

const Button: FunctionComponent<IProps> = (props: IProps) => {
  const { onClick, children, disabled } = props;

  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
