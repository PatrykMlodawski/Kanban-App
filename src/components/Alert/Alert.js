import React from 'react';
import styles from './Alert.module.scss';

const Alert = ({ type, children }) => {
  return (
    <p className={`${styles.alert} ${styles[type]}`} role="alert">
      {children}
    </p>
  );
};

export default Alert;
