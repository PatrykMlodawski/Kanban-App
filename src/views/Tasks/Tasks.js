import React from 'react';
import styles from './Tasks.module.scss';
import Card from '../../components/Card/Card';
import TaskList from '../../components/TaskList/TaskList';

const Tasks = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tasks}>
        <TaskList title="To-Do">
          <Card />
          <Card />
          <Card />
          <Card />
        </TaskList>
        <TaskList title="In Progress">
          <Card />
          <Card />
          <Card />
          <Card />
        </TaskList>
        <TaskList title="Done">
          <Card />
          <Card />
          <Card />
          <Card />
        </TaskList>
      </div>
    </div>
  );
};

export default Tasks;
