import React, { useState } from 'react';
import styles from './HeaderNavigation.module.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const HeaderNavigation = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <nav className={styles.nav}>
      {error && window.alert(error)}
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
              <button
                onClick={handleLogout}
                type="button"
                className={`${styles.navBtn} ${styles.navItem}`}
              >
                Logout
              </button>
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
