import React from 'react';
import styles from './Header.module.scss';
import logo from '../../images/logo.webp';
import HeaderNavigation from './HeaderNavigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1 className={styles.title}>Kanban</h1>
      </div>
      <HeaderNavigation />
    </header>
  );
};

export default Header;
