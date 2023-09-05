Documentación oficial de React
Comparto el enlace de la documentación oficial de React, que hace poco fue publicada oficialmente.

https://react.dev/
.
También existe la documentación en español, aunque en el momento de este aporte, aún falta por traducir páginas.
https://es.react.dev/
.
Y como complemento al curso, te dejo una serie de videos de React por Midudev.
Curso de React 2023 por midudev

root.render(<Todocount>)

npm run Ejecuta nuestro proyecto en modo desarrollo

npm build Genera versión del proyecto para desplegar a producción.

¿Dónde se renderiza (dibuja) nuestra aplicación? En el div con id="root" del index.html

¿De dónde viene lo que se renderiza? Del componente “App” que definimos en index.js

¿ Qué son los componentes ? piezas de código (generalmente en forma de funciones con nombre en mayúscula).

¿Qué retorna la función ? los elementos del componente (elementos de React), en un formato llamado JSX, el cual se parece a HTML.

¿ Qué utilidad tiene JSX ? combinar código HTML con JS para, por ejemplo, usar variables para dar valores a los atributos de los elementos

¿ Principal diferencia entre elementos y componentes ? Los elementos empiezan con minúsculas y los componentes con mayúsculas.

¿ Para qué sirven ? Para reutilizarlos y así no repetir código

¿ Cómo llamo a un componente? Escribiendo su nombre con la siguiente sintáxis < Componente1 />

¿ Cómo agrego dinamismo a los componentes para que cambien su contenido ? Recibiendo props por parámetros de la función

Nota: Los componentes se pueden anidar, es decir, meter uno dentro de otro

primero llamar los componentes, luego crearlo Una forma de hacerlo

Exportar solo el objeto es best practice.

```js
import { TodoCounter } from './TodoCounter';
```

Props:
La funcion recibe props pero son objetos {}

```js
function TodoCounter({props, objeto, cosa, vaina}) {
  return(
    <h1>
      Has completado 3 de 5 TODOS
    </h1>
  );
}

export { TodoCounter };
```

Componentes => Reciben Propiedades.
Elementos => Reciben Atributos.
…
Hay que tener en cuenta que en JSX, la sintaxis entre atributos y propiedades es muy parecida, ya que escribimos el valor de las props en los componentes como si fueran atributos, pero estos no lo son…
…
Las props son variables que declaramos en nuestro componente como si fueran parámetros de una función, podemos declarar una unica (Prop) o declarar varias Props utilizando la {Desestructuración}.
Para luego posteriormente darles un valor como si fueran argumentos, pero utilizando otro tipo de sintaxis, que es muy parecida a la de los atributos de los elementos HTML, con la diferencia que el otorgamos el valor entre {llaves}.
…
En cuanto a la propiedad “props.children” esta hace referencia a que React transforma automáticamente a todo lo que se encuentre dentro del componente padre en un elemento “children” , es decir todo lo que se encuentre dentro de una etiqueta de apertura <Component> y una etiqueta de cierre </Component> para React será “Children”.
…
Por otro lado existe <React.Fragment> o su sintaxis más corta " <> </> " que es un contenedor invisible que tiene como objetivo envolver todos los componentes JSX dentro de un contenedor padre, esto es debido a que React necesita envolver esos componentes para renderizarlos, y asi no crear nodos innecesarios en el DOM.
…
Por ultimo, debemos tener en cuenta que podemos renderizar elementos a través de un Array, utilizando en este caso el metodo .map(), y devolviendo el componente “TodoItem” por cada uno de los objetos del array…
Es necesario que le pasemos las props “key={todo.text} text={todo.text}” al componente para que nos muestre un contenido distinto por cada objeto de este array.
…
La prop “Key” funciona como un Identificador para objeto del array y es necesaria cuando utilizamos el metodo .map()

on react {} calls for JS

onClick
on...  encapsularlos en una function 

```js
import './CreateTodoButton.css'

function CreateTodoButton(){
  return(
      <button 
        className="CreateTodoButton" 
        onClick={
          (event) => {
            console.log('le diste Click')
            console.log(event)
            console.log(event.target)
          }
        }
      >+</button>
  );
}function useLocalStorage() {
  const [item, setItem] = React.useState()

  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;
  
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    
    setItem(newItem);
  };
}
export  { CreateTodoButton  } 


```
  {/* {[<TodoCounter />, <TodoList />]} */}

Modulo Local Storage:
Persistencia localStorage is the way to get persistent
this means cliente would close the app and come back
data is still avaliable as the last time it was used

Custom Hooks: inside the useLocalStorage fuctions TODOS became item

Logic reutilization


```js
function useLocalStorage() {
  const [item, setItem] = React.useState()

  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;
  
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    
    setItem(newItem);
  };
}
```
Folder and file organization:
Stateless vs Stateful
En App hay que abstraer la UI en un nuevo componente al cual llamaremos con todas las props que necesitemos desde el componente App general.

React.useEffect

```js
  console.log('Log 1');

  // React.useEffect(() => {
  //   console.log("Loooooooooooooog 2");
  // });

  // React.useEffect(() => {
  //   console.log("Loooooooooooooog 2");
  // }, []);

    React.useEffect(() => {
    console.log("Loooooooooooooog 2");
  }, []);

  console.log('Log 3');
```
Loading Skeletons: 
https://uiverse.io/

react context: 

Recién tuve una entrevista con esa información. Es muy importante ver los términos ya que es algo que se ve comúnmente en react:

Prop Drilling: es una paso del desarrollo que ocurre cuando necesitamos obtener datos que están en varias capas en el árbol de componentes React.

Este se ve siempre cuando pasamos props entre hijos, luego ese a otros hijos y así sucesivamente… la solución es usar context:

Context: es un elemento que podemos crear en React para establecer una comunicación directa entre un componente en un nivel muy alto y uno en un nivel mucho más bajo.

Por ende context permite acceder a los valores de forma directa.
```js
import React from "react";

const TodoContext = React.createContext();

function TodoProvider() {
  return (
    <TodoContext.Provider> 
    
    </TodoContext.Provider> 
  )
}

<TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext };
```

useContext

React Portals:

Los portales nos permiten ubicar un componente hijo dentro del conjunto de componentes que se renderizan en el nodo html principal del DOM, generalmente el id = “root”, pero hacer que aparezcan en un **nodo **fuera de la jerarquía del DOM. Esto permite una mayor facilidad a la hora de maquetar y estilizar componentes que aparecen y desaparecen en el renderizado de nuestra página como los modales (ventanas).

Gracias a los portales, por ejemplo, podemos ubicar a nuestro componente <Modal> luego del conjunto de componentes que tenemos en la AppUI como <TodoCounter/>, <TodoSearch/> o <CreateTodoButton/>, pero el renderizado se hará en el div del nodo html que nosotros indiquemos, osea fuera del “root”. Esto trae como ventaja por ejemplo poder estilizar fácilmente el modal para que aparezca por encima del resto de componentes.

import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="Modal">
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };