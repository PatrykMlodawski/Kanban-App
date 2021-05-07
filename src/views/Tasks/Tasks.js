import React, { useState, useEffect } from 'react';
import styles from './Tasks.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../../components/Card/Card';
import TaskList from '../../components/TaskList/TaskList';
import Popup from '../../components/Popup/Popup';

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
    value: 0,
    text: 'Low',
  },
  {
    value: 1,
    text: 'Medium',
  },
  {
    value: 2,
    text: 'High',
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [choosenTask, setChoosenTask] = useState(null);
  const { addTask, getTasks, deleteTask, editTask } = useAuth();

  const togglePopup = () => {
    isModalOpen && setChoosenTask(null);
    setError('');
    setIsModalOpen(!isModalOpen);
  };

  const openEditPopup = (title, content, priority, color, type, id) => {
    setChoosenTask({
      title,
      content,
      priority,
      color,
      type,
      id,
    });
    togglePopup();
  };

  const handleSubmit = async (e, title, content, priority, color, type, id) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      if (title.length > 50 || content.length > 200) throw new Error('Too many characters!');

      choosenTask
        ? await editTask(title, content, priority, color, type, id)
        : await addTask(title, content, priority, color, 'toDo');

      const tasks = await getTasks();
      setTasks(tasks);
      togglePopup();
    } catch {
      setError('Failed to add/edit a task');
    }
    setLoading(false);
  };

  const moveTask = async (title, content, color, priority, id, from, to) => {
    const promises = [addTask(title, content, color, priority, to), deleteTask(from, id)];
    try {
      setLoading(true);

      await Promise.all(promises);
      const tasks = await getTasks();
      setLoading(false);
      setTasks(tasks);
    } catch {
      console.error('Failed to move task');
    }
  };

  const deleteTaskFunc = async (type, id) => {
    setLoading(true);
    await deleteTask(type, id);
    const tasks = await getTasks();
    setLoading(false);
    setTasks(tasks);
  };

  function sortTasks(tasks) {
    return Object.entries(tasks)
      .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
      .sort((a, b) => b[1].priority - a[1].priority);
  }

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, [getTasks]);

  return (
    <>
      {isModalOpen && (
        <Popup
          edit={!!choosenTask}
          error={error}
          loading={loading}
          handleSubmit={handleSubmit}
          prioritiesList={PRIORITIES}
          colorsList={COLORS}
          closeFunc={togglePopup}
          title={choosenTask ? choosenTask.title : ''}
          content={choosenTask ? choosenTask.content : ''}
          priority={choosenTask ? choosenTask.priority : 0}
          color={choosenTask ? choosenTask.color : COLORS[0].value}
          taskType={choosenTask ? choosenTask.type : null}
          taskId={choosenTask ? choosenTask.id : null}
        ></Popup>
      )}
      <button onClick={togglePopup} className={styles.addTaskBtn} type="button"></button>
      <div className={styles.wrapper}>
        {tasks && (
          <div className={styles.tasks}>
            <TaskList title="To-Do">
              {sortTasks(tasks.toDo).map((task) => (
                <Card
                  isModalOpen={isModalOpen}
                  loading={loading}
                  deleteFunc={deleteTaskFunc}
                  moveTaskFunc={moveTask}
                  editPopupFunc={openEditPopup}
                  id={task[0]}
                  type="toDo"
                  title={task[1].title}
                  content={task[1].content}
                  priority={task[1].priority}
                  color={task[1].color}
                  btnText="Start Task"
                  key={task[0]}
                />
              ))}
            </TaskList>

            <TaskList title="In Progress">
              {sortTasks(tasks.inProgress).map((task) => (
                <Card
                  isModalOpen={isModalOpen}
                  loading={loading}
                  deleteFunc={deleteTaskFunc}
                  moveTaskFunc={moveTask}
                  editPopupFunc={openEditPopup}
                  id={task[0]}
                  type="inProgress"
                  title={task[1].title}
                  content={task[1].content}
                  priority={task[1].priority}
                  color={task[1].color}
                  btnText="Done"
                  key={task[0]}
                />
              ))}
            </TaskList>
            <TaskList title="Done">
              {sortTasks(tasks.done).map((task) => (
                <Card
                  isModalOpen={isModalOpen}
                  loading={loading}
                  deleteFunc={deleteTaskFunc}
                  moveTaskFunc={moveTask}
                  editPopupFunc={openEditPopup}
                  id={task[0]}
                  type="done"
                  title={task[1].title}
                  content={task[1].content}
                  priority={task[1].priority}
                  color={task[1].color}
                  btnText="Undone"
                  key={task[0]}
                />
              ))}
            </TaskList>
          </div>
        )}
      </div>
    </>
  );
};

export default Tasks;
