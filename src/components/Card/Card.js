import React from 'react';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <li className={styles.card}>
      <button className={styles.deleteBtn} type="button"></button>
      <h3 className={styles.title}>First Task</h3>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est laboriosam
        consequuntur rem impedit dolorem ut. Blanditiis voluptatem, reiciendis officiis vel illum
        maxime quod dicta vitae ad earum, eligendi reprehenderit!
      </p>
      <div className={styles.btns}>
        <button type="button">Edit</button>
        <button type="button">Start task</button>
      </div>
    </li>
  );
};

export default Card;
