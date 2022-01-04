import React from "react";
import { AppUI } from "./Modules/AppUI";
import { TodoProvider } from "/Users/jorgeplasencia/ScriptsLocal/Scripts/React/Platzi/curso-intro-react/src/TodoContext/index.js";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
