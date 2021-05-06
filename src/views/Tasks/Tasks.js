import React, { useState } from 'react';
import styles from './Tasks.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../../components/Card/Card';
import TaskList from '../../components/TaskList/TaskList';
import Popup from '../../components/Popup/Popup';

const TASKS = {
  toDo: [
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'blue',
      priority: 1,
    },
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'blue',
      priority: 1,
    },
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'gray',
      priority: 1,
    },
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'blue',
      priority: 1,
    },
  ],
  inProgress: [
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'blue',
      priority: 1,
    },
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'red',
      priority: 1,
    },
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'red',
      priority: 1,
    },
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'blue',
      priority: 1,
    },
  ],
  done: [
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'blue',
      priority: 1,
    },
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'green',
      priority: 1,
    },
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'purple',
      priority: 1,
    },
    {
      title: 'First task',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum natus iure qui vitae eveniet officia minima?',
      color: 'yellow',
      priority: 1,
    },
  ],
};

const COLORS = [
  {
    value: '#32CBFF',
    text: 'Vivid Sky Blue',
  },
  {
    value: '#064789',
    text: 'Yale Blue',
  },
  {
    value: '#B3679B',
    text: 'Pearly Purple',
  },
  {
    value: '#FF7F11',
    text: 'Amber',
  },
  {
    value: '#50A2A7',
    text: 'Cadet Blue',
  },
];

const PRIORITIES = [
  {
    value: '0',
    text: 'Low',
  },
  {
    value: '1',
    text: 'Medium',
  },
  {
    value: '2',
    text: 'High',
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addTask } = useAuth();

  const togglePopup = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (e, title, content, priority, color) => {
    e.preventDefault();

    setLoading(true);
    await addTask(title, content, priority, color);

    togglePopup();
    setLoading(false);
  };

  return (
    <>
      {isModalOpen && (
        <Popup
          loading={loading}
          handleSubmit={handleSubmit}
          prioritiesList={PRIORITIES}
          colorsList={COLORS}
          closeFunc={togglePopup}
          title=""
          content=""
          priority="0"
          color={COLORS[0].value}
        ></Popup>
      )}
      <button onClick={togglePopup} className={styles.addTaskBtn} type="button"></button>
      <div className={styles.wrapper}>
        <div className={styles.tasks}>
          <TaskList title="To-Do">
            {tasks.toDo.map((task, index) => (
              <Card
                type="toDo"
                title={task.title}
                content={task.content}
                color={task.color}
                btnText="Start Task"
                key={index}
              />
            ))}
          </TaskList>
          <TaskList title="In Progress">
            {tasks.inProgress.map((task, index) => (
              <Card
                type="inProgress"
                title={task.title}
                content={task.content}
                color={task.color}
                btnText="Done"
                key={index}
              />
            ))}
          </TaskList>
          <TaskList title="Done">
            {tasks.done.map((task, index) => (
              <Card
                type="done"
                title={task.title}
                content={task.content}
                color={task.color}
                btnText="Undone"
                key={index}
              />
            ))}
          </TaskList>
        </div>
      </div>
    </>
  );
};

export default Tasks;
