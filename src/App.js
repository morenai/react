import React from'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de Intro a React.js', completed: false },
  { text: 'Getting Rich', completed: false },
  { text: 'Comprarles muchos regalos a la sheila', completed: false },
];



function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
        {[<TodoCounter />, <TodoList />]}

      </TodoList>
      <CreateTodoButton/>
    </>

    
  );
}

export default App;