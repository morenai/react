import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSeachValue
}) {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSeachValue(event.target.value);
        }}
    />
  );
}

export { TodoSearch };