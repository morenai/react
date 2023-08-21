import React from'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de Intro a React.js', completed: false},
  { text: 'Getting Rich', completed: false},
  { text: 'Comprarles muchos regalos a la sheila', completed: false },
  { text: 'una motaca to guapa', completed: true },
];



function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSeachValue] = React.useState('');

  const completedTodos = todos.filter(
    (todo) => !!todo.completed
    ).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1); 
    setTodos(newTodos)
    }

  console.log('Los usuarios buscan todos de ' + searchValue);
  return (
    <>
      <TodoCounter completed={completedTodos} 
      total={totalTodos}/>
      <TodoSearch
        searchValue= {searchValue}
        setSeachValue= {setSeachValue}
        
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>

    
  );
}

export default App;