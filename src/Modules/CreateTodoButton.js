import React from "react";
import "/Users/jorgeplasencia/ScriptsLocal/Scripts/React/Platzi/curso-intro-react/src/Styles/CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  }

  return <button className="CreateTodoButton" onClick={() => onClickButton("Aqui se deberia mostrar la alerta")}>
    +
    </button>;
}

export { CreateTodoButton };
