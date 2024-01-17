import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
 const handleSubmit = e => { 
    e.preventDefault();

    addTodo(value);
    setValue("");
 }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        className="todo-input"
        placeholder="enter task"
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
