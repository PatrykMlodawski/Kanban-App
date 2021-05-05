import React from 'react';
import styles from './TaskList.module.scss';

const TaskList = ({ title, children }) => {
  return (
    <ul className={styles.taskList}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </ul>
  );
};

export default TaskList;
