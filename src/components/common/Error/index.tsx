import React, { FunctionComponent } from 'react';

import { IProps } from './interfaces';

import styles from './index.module.scss';

const Error: FunctionComponent<IProps> = (props: IProps) => {
  const { text } = props;

  return (
    <div className={styles.errorWrapper}>
      <p className={styles.error}>
        {text}
      </p>
    </div>
  )
};

export default Error;