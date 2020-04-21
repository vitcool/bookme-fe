import React, { FunctionComponent } from 'react';

import styles from './index.module.scss';

interface IProps {
  children: Array<boolean | JSX.Element> | JSX.Element | String;
}

const AuthWrapper: FunctionComponent<IProps> = ({ children }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bubble} />
      {children}
      <div className={styles.bottom} />
    </div>
  );
};

export default AuthWrapper;
