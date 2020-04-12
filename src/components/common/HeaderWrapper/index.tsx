import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HOME, ABOUT, LOGIN, LIST_TASKS, CREATE_TASK } from 'constants/routes';

import { LOGOUT_REQUEST } from 'redux/modules/auth/actions';
import { getUserToken, getIsUserTasker } from 'redux/modules/auth/selectors';

import { IProps } from './interfaces';

import styles from './index.module.scss';

const HeaderWrapper: FunctionComponent<IProps> = ({ type, children }: IProps) => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const isUserTasker = useSelector(getIsUserTasker);
  const isAuth = type === 'auth';
  const childWrapperClassName = isAuth ? styles.authContentWrapper  : styles.mainContentWrapper;

  const handleLogoutClick = () => {
    dispatch(LOGOUT_REQUEST({}));
  };

  return (
    <>
      <div className={styles.menuWrapper}>
        {isUserTasker ? (
          <NavLink
            to={LIST_TASKS}
            className={styles.menuItem}
            activeClassName={styles.activeMenuItem}
          >
            List of tasks
          </NavLink>
        ) : (
          <NavLink
            to={CREATE_TASK}
            className={styles.menuItem}
            activeClassName={styles.activeMenuItem}
          >
            Create task
          </NavLink>
        )}
        <NavLink
          to={HOME}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
          exact={true}
        >
          Home
        </NavLink>
        <NavLink
          to={ABOUT}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
          About
        </NavLink>
        {token && (
          <div className={styles.menuItem} onClick={handleLogoutClick}>
            Logout
          </div>
        )}
      </div>
      <div className={childWrapperClassName}>{children}</div>
    </>
  );
};

export default HeaderWrapper;
