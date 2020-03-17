import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HOME, POSTS, ABOUT, LOGIN } from 'constants/routes';

import { LOGOUT_REQUEST } from 'redux/modules/auth/actions';
import { getUserToken } from 'redux/modules/auth/selectors';

import { IProps } from './interfaces';

import styles from './HeaderWrapper.module.scss';

const HeaderWrapper: FunctionComponent<IProps> = (props: IProps) => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);

  const { children } = props;

  const handleLogoutClick = () => {
    dispatch(LOGOUT_REQUEST({}));
  };

  return (
    <>
      <div className={styles.menuWrapper}>
        <NavLink
          to={HOME}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
          exact={true}
        >
          Home
        </NavLink>
        <NavLink
          to={LOGIN}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
          Login
        </NavLink>
        <NavLink
          to={POSTS}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
          Posts
        </NavLink>
        <NavLink
          to={ABOUT}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
          About
        </NavLink>
        {token && <div className={styles.menuItem} onClick={handleLogoutClick}>Logout</div>}
      </div>
      <div className={styles.pageContentWrapper}>{children}</div>
    </>
  );
};

export default HeaderWrapper;
