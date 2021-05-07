import React from 'react';
import styles from './Card.module.scss';

const Card = ({
  type,
  title,
  content,
  priority,
  btnText,
  color,
  id,
  deleteFunc,
  moveTaskFunc,
  editPopupFunc,
  loading,
  isModalOpen,
}) => {
  return (
    <li className={styles.card} style={{ backgroundColor: color }}>
      <button
        disabled={loading}
        onClick={() => deleteFunc(type, id)}
        className={styles.deleteBtn}
        type="button"
      ></button>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <div className={styles.btns}>
        {type === 'inProgress' && (
          <button
            disabled={loading || isModalOpen}
            onClick={() => {
              moveTaskFunc(title, content, color, priority, id, type, 'toDo');
            }}
            type="button"
          >
            ToDo
          </button>
        )}
        <button
          disabled={isModalOpen}
          onClick={() => editPopupFunc(title, content, priority, color, type, id)}
          type="button"
        >
          Edit
        </button>
        <button
          disabled={loading || isModalOpen}
          onClick={() => {
            let nextType;
            if (type === 'toDo') {
              nextType = 'inProgress';
            } else if (type === 'inProgress') {
              nextType = 'done';
            } else {
              nextType = 'inProgress';
            }
            moveTaskFunc(title, content, color, priority, id, type, nextType);
          }}
          type="button"
        >
          {btnText}
        </button>
      </div>
    </li>
  );
};

export default Card;
