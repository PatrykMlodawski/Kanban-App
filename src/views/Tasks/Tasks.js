import React, { useState } from 'react';
import styles from './Tasks.module.scss';
import Card from '../../components/Card/Card';
import TaskList from '../../components/TaskList/TaskList';
import Popup from '../../components/Popup/Popup';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';

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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('0');
  const [color, setColor] = useState(COLORS[0].value);
  const [loading, setLoading] = useState(false);

  const togglePopup = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <Popup>
          <Form closeFunc={togglePopup} title="New Task">
            <Input
              tag="input"
              handleChange={(e) => setTitle(e.target.value)}
              id="title"
              type="text"
              value={title}
              required
            >
              Title
            </Input>
            <Input
              tag="textarea"
              handleChange={(e) => setContent(e.target.value)}
              id="content"
              type="text"
              value={content}
              required
            >
              Description
            </Input>
            <Dropdown
              handleChange={(e) => setPriority(e.target.value)}
              options={PRIORITIES}
              id="priority"
              value={priority}
              required
            >
              Priority
            </Dropdown>
            <Dropdown
              handleChange={(e) => setColor(e.target.value)}
              options={COLORS}
              id="color"
              value={color}
              color
              required
            >
              Color
            </Dropdown>
            <Button disabled={loading} type="submit">
              Add Task
            </Button>
          </Form>
        </Popup>
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
