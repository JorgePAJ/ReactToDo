import React from "react";
import "/Users/jorgeplasencia/ScriptsLocal/Scripts/React/Platzi/curso-intro-react/src/Styles/TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Luisa"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };