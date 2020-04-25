import React, { FunctionComponent } from 'react';

import styles from './index.module.scss';
import { IProps } from './interfaces';

const Container: FunctionComponent<IProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
