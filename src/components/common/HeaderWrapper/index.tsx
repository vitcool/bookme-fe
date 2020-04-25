import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HOME, ABOUT, LOGIN, SIGN_UP } from 'constants/routes';

import { LOGOUT_REQUEST } from 'redux/modules/auth/actions';
import { getUserToken } from 'redux/modules/auth/selectors';

import { IProps } from './interfaces';

import Logo from '../Logo';

import styles from './index.module.scss';
import Container from '../Container';

const HeaderWrapper: FunctionComponent<IProps> = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);

  const handleLogoutClick = () => {
    dispatch(LOGOUT_REQUEST({}));
  };

  return (
    <>
      <Container>
        <div className={styles.menuWrapper}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>
          <div className={styles.menuGroup}>
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
          </div>
          {token ? (
            <div className={styles.menuItem} onClick={handleLogoutClick}>
              Logout
            </div>
          ) : (
            <div className={styles.menuGroup}>
              <NavLink
                to={LOGIN}
                className={styles.menuItem}
                activeClassName={styles.activeMenuItem}
              >
                Login
              </NavLink>
              <NavLink
                to={SIGN_UP}
                className={styles.menuItem}
                activeClassName={styles.activeMenuItem}
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>
      </Container>
      <div className={styles.contentWrapper}>{children}</div>
    </>
  );
};

export default HeaderWrapper;
