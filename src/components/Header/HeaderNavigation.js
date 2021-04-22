import React from 'react';
import styles from './HeaderNavigation.module.scss';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const HeaderNavigation = () => {
  const { currentUser } = useAuth();

  return (
    <nav className={styles.nav}>
      <ul className={styles.wrapper}>
        {currentUser ? (
          <>
            <li>
              <NavLink
                exact
                className={`${styles.navLink} ${styles.navItem}`}
                activeClassName={styles.selected}
                to="/"
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${styles.navLink} ${styles.navItem}`}
                activeClassName={styles.selected}
                to="/account"
              >
                Account
              </NavLink>
            </li>
            <li>
              <button className={`${styles.navBtn} ${styles.navItem}`}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                exact
                className={`${styles.navLink} ${styles.navItem}`}
                activeClassName={styles.selected}
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${styles.navLink} ${styles.navItem}`}
                activeClassName={styles.selected}
                to="/signup"
              >
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
