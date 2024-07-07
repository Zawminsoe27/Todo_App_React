import style from "./header.module.css";
import React from "react";
import "../App.css";
export default function Header() {
  return (
    <h1 className={style.header}>
      My <span className="todoLogo">Todo</span> App
    </h1>
  );
}
