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
}
export  { CreateTodoButton  } 


```
  {/* {[<TodoCounter />, <TodoList />]} */}