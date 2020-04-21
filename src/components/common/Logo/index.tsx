import React, { FunctionComponent, ChangeEvent } from 'react';

import logoSrc from 'assets/images/logo.svg';

import styles from './index.module.scss';

const Input: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.textWrapper}>
        Book<span>Me</span>
      </p>
      <img src={logoSrc} className={styles.logo}/>
    </div>
  );
};

export default Input;
