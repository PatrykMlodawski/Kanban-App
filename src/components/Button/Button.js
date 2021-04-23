import React from 'react';
import styles from './Button.module.scss';

const Button = ({ disabled, type, children }) => {
  return (
    <button className={styles.button} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
