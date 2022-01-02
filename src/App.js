import React from "react";
import { TodoCounter } from "./Modules/TodoCounter";
import { TodoItem } from "./Modules/TodoItem";
import { CreateTodoButton } from "./Modules/CreateTodoButton";
import { TodoSearch } from "./Modules/TodoSearch";
import { TodoList } from "./Modules/TodoList";
// import './App.css';

const todos = [
  { text: "Wake up", completed: true },
  { text: "Aprender React", completed: false },
  { text: "Washar Kimetsu", completed: false },
];


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;