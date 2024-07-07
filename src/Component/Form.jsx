import { useState } from "react";
import React from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
//  const [todo, setTodo] = useState("");
const [todo, setTodo] = useState({name:"",done:false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos,todo])
    setTodo({name:"",done:false})
  }

  return (
    <form action="" onSubmit={handleSubmit} className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.modernInput}
          placeholder="Enter Todo Item"
          onChange={(e) => setTodo({name:e.target.value, done:false})}
          value={todo.name}
        />
        <button type="submit" className={styles.modernButton}>Add</button>
      </div>
    </form>
  );
}
