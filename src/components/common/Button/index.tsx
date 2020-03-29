import React, { FunctionComponent, MouseEvent } from 'react';

import { IProps } from './interfaces';

import styles from './index.module.scss';

const Button: FunctionComponent<IProps> = ({ onClick, children, disabled, pending, type }: IProps) => {

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={styles.button}
        disabled={disabled}
        type={type}
      >
        <div className={styles.buttonContent}>
          <div className={styles.buttonChildren}>{children}</div>
          <div className={styles.loaderWrapper}>
            {pending ? (
              <div className={styles.skChase}>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
              </div>
            ) : null}
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
