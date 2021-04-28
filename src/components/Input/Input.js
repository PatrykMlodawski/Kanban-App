import React from 'react';
import styles from './Input.module.scss';

const Input = ({ id, children, value, type, handleChange, ...props }) => {
  return (
    <>
      {props.info && <p className={styles.info}>{props.info}</p>}
      <div className={styles.formItem}>
        <input
          id={id}
          className={styles.input}
          placeholder=" "
          onChange={handleChange}
          type={type}
          value={value}
          {...props}
        />
        <label className={styles.label} htmlFor={id}>
          {children}
        </label>
        <div className={styles.formItemBar}></div>
      </div>
    </>
  );
};

export default Input;
