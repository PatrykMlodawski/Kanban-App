import React from 'react';
import styles from './Form.module.scss';
import Alert from '../Alert/Alert';

const Form = ({ onFormSubmit, title, error, children }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {error && <Alert type="error">{error}</Alert>}
      <form className={styles.form} onSubmit={onFormSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
