import React, { FunctionComponent, MouseEvent } from 'react';

import { IProps } from './interfaces';

import styles from './index.module.scss';

const Button: FunctionComponent<IProps> = (props: IProps) => {
  const { onClick, children, disabled, pending } = props;

  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={styles.button}
        disabled={disabled}
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
