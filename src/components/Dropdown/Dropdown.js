import React from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = ({ id, value, options, children, handleChange, color }) => {
  return (
    <div className={styles.formItem}>
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
      <select
        style={{ color: `${color ? value : null}` }}
        className={styles.select}
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
      >
        {options.map((item) => (
          <option
            style={{ color: `${color ? item.value : null}` }}
            key={item.value}
            value={item.value}
          >
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
