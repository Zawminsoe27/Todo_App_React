import React, { useState } from "react";
import Todo from "./Component/Todo";
import Header from "./Component/Header";
import "./App.css"
function App() {
  let [text, setText] = useState();

  return (
    <div className="App">
      <Header/>
      <Todo />
    </div>
  );
}
export default App;
