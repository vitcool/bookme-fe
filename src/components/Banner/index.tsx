import React, { FunctionComponent } from 'react';

import Container from 'components/common/Container';

import staffSrc from 'assets/images/home/staff.svg';

import styles from './index.module.scss';

const Banner: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <p className={styles.text}>
              Get Access to Unlimited Tasks which needs to be performed.
              Everywhere, Everytime!
            </p>
            <div className={styles.imageWrapper}>
              <img src={staffSrc} />
            </div>
          </div>
          <p className={styles.subText}>
            premium access to more than 10,000 tasks from different categories
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
