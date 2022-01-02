import React from "react";
import { TodoCounter } from "./Modules/TodoCounter";
import { TodoItem } from "./Modules/TodoItem";
import { CreateTodoButton } from "./Modules/CreateTodoButton";
import { TodoSearch } from "./Modules/TodoSearch";
import { TodoList } from "./Modules/TodoList";
// import './App.css';

const defaultTodos = [
  { text: "Wake up", completed: true },
  { text: "Aprender React", completed: true },
  { text: "Washar Kimetsu", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
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
