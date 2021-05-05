import React from 'react';
import styles from './Form.module.scss';
import Alert from '../Alert/Alert';

const Form = ({ closeFunc, onFormSubmit, title, error, message, children }) => {
  return (
    <div className={styles.wrapper}>
      {closeFunc && <button onClick={closeFunc} className={styles.closeBtn} type="button"></button>}
      <h2 className={styles.title}>{title}</h2>
      {error && <Alert type="error">{error}</Alert>}
      {message && <Alert type="message">{message}</Alert>}
      <form className={styles.form} onSubmit={onFormSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
