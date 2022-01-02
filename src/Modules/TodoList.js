import react from "react";
import '/Users/jorgeplasencia/ScriptsLocal/Scripts/React/Platzi/curso-intro-react/src/Styles/TodoList.css';


function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };