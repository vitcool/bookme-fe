import React, { FunctionComponent, MouseEvent } from 'react';

import { IProps } from './interfaces';

import styles from './index.module.scss';

const Button: FunctionComponent<IProps> = (props: IProps) => {
  const { onClick, children } = props;

  const handleClick = (event: MouseEvent) => {
    onClick();
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
