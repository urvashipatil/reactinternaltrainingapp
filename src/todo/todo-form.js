import React, { useState } from "react";

export default function TodoForm(props) {
  const [newTodo, setNewTodo] = useState({
    id: null,
    title: "",
    completed: false
  });

  function onSubmit(event) {
    event.preventDefault();
    // console.log(event);
    props.onTodoAddParent(newTodo);
  }

  function onHandleChange(event) {
    // console.log("OnChange is fired");
    // console.log(event.target.value);
    setNewTodo({
      ...newTodo,
      title: event.target.value
    });

    // console.log("newTodo", newTodo);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* Controlled component */}
        <input
          value={newTodo.title}
          onChange={onHandleChange}
          style={{ width: "70%" }}
          type="text"
          placeholder="What do you want to do today?"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

//,onTodoAddParent: PropTypes.func
