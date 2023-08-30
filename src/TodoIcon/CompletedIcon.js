import React from "react";
import { TodoIcon } from './';

function CompletedIcon({ completed, onComplete }) {
  return (
    <TodoIcon 
      type="check"
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompletedIcon }