import React from "react";
import { TodoCounter } from "./todoCounter";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";

const todos = [
  { text: "Ir al cine", complete: false },
  { text: "Aprender React", complete: false },
  { text: "Trabajar en Meta", complete: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key = {todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
