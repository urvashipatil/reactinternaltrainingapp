import React, { useState, useEffect } from "react";
import TodoList from "./todo-list";
import TodoForm from "./todo-form";

export default function TodoApp() {
  console.log("TodoApp render");
  const [todos, setTodos] = useState([
    { id: 201, title: "Todo Item 1", completed: true },
    { id: 202, title: "Todo Item 2", completed: false },
    { id: 203, title: "Todo Item 3", completed: false }
  ]);

  //useEffect will execute on each render
  // useEffect(() => {
  //   console.log("my First UseEffect");
  // });

  //useEffect will execute only once
  useEffect(() => {
    console.log("my First UseEffect");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        setTodos([...todos, ...data]);
      });
  }, []);

  function onTodoAdd(newTodo) {
    // console.log("onTodoAdd from TodoApp", newTodo);
    newTodo.id = todos.length + 1; //  +new Date();
    setTodos([newTodo, ...todos]);
  }

  // console.log(todos);

  return (
    <div>
      <h2>Todo App</h2>
      <TodoForm onTodoAddParent={onTodoAdd} />
      <TodoList title="New List Title" todos={todos} />
    </div>
  );
}
