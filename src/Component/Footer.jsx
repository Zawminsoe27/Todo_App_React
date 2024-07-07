import React from "react";
import style from "./footer.module.css";
export default function Footer({ completedTodo, totalTodos }) {
  return (
    <div className={style.footer}>
      <span>Completed Todo: {completedTodo}</span>
      <span>Total Todo: {totalTodos}</span>
    </div>
  );
}
