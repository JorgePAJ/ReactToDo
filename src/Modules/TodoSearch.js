import React from "react";
import "/Users/jorgeplasencia/ScriptsLocal/Scripts/React/Platzi/curso-intro-react/src/Styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Luisa"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
  ];
}

export { TodoSearch };
