import React from "react";
import styles from "./todoItem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleDoneCheck(name) {
    console.log(name);
    const newTodo = todos.map((todo) => {
     return todo.name == name ? { ...todo, done: !todo.done } : todo;
    });
    setTodos(newTodo);
    console.log(todos);
  }
  const completed = item.done ? styles.completed :""
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span 
        className={completed}
          onClick={() => {
            handleDoneCheck(item.name);
          }}
        >
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => {
              handleDelete(item);
            }}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
