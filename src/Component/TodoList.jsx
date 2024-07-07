import React from "react";
import Todoitem from "./Todoitem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortedTodo = todos.slice().sort((a, b) => {
   return Number(a.done) - Number(b.done);
  });
  return (
    <div className={styles.list}>
      {sortedTodo.map((item) => (
        <Todoitem
          item={item}
          key={item.name}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
