import React, { useState } from "react";
import Todoitem from "./Todoitem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodo = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodo={completedTodo} totalTodos={totalTodos}/>
    </div>
  );
}
