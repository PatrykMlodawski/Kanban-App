import React, { useState } from 'react';
import styles from './Popup.module.scss';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';

const Popup = (props) => {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const [priority, setPriority] = useState(props.priority);
  const [color, setColor] = useState(props.color);

  return (
    <div className={styles.popup}>
      <Form
        error={props.error}
        onFormSubmit={(e) => {
          props.handleSubmit(e, title, content, color, priority, props.taskType, props.taskId);
        }}
        closeFunc={props.closeFunc}
        title={props.edit ? 'Edit Task' : 'New Task'}
      >
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
        >
          Description
        </Input>
        <Dropdown
          handleChange={(e) => setPriority(parseInt(e.target.value))}
          options={props.prioritiesList}
          id="priority"
          value={priority}
          required
        >
          Priority
        </Dropdown>
        <Dropdown
          handleChange={(e) => setColor(e.target.value)}
          options={props.colorsList}
          id="color"
          value={color}
          color
          required
        >
          Color
        </Dropdown>
        <Button disabled={props.loading} type="submit">
          {props.edit ? 'Accept' : 'Add Task'}
        </Button>
      </Form>
    </div>
  );
};

export default Popup;
