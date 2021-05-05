import React from 'react';
import styles from './Card.module.scss';

const Card = ({ type, title, content, btnText, color }) => {
  return (
    <li className={styles.card} style={{ backgroundColor: color }}>
      <button className={styles.deleteBtn} type="button"></button>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <div className={styles.btns}>
        <button type="button">Edit</button>
        <button type="button">{btnText}</button>
      </div>
    </li>
  );
};

export default Card;
