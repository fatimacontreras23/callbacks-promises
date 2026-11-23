
TypeScript -> JavaScript

-Dar interactividad a las paginas web y movil 

-Se utilizan tambien en servidores (en especial JavaScript en entornos como Node.js)

JavaScript tiene motor de ejecucion en el que se ejecuta el codigo 

TypeScript se transpila a JavaScript

JavaScript posee un modelo de ejecucion de un solo hilo principal(single-threaded): Solo puede ejecutar una instruccion a la vez en su hilo principal

Operacion sincrona: las tareas se ejecutan una tras otra

Operacion asincrona: una tarea que se inicia ahora, pero cuyo resultado se obtendra en el futuro

01. Callbacks(llamada de retorno)
funcion que se pasa a otra funcion como argumento, con la intencion de que la funcion que receptora la ejecute (invoque) en algun momento de su propio cuerpo.

1. Declarar una funcion: Definimos que hace, 
2. Invocar una funcion:  usamos parentesis () para que corra AHORA MISMO.
3. Pasar como argumento: Usamos el nombre de la funcion SIN parentesis

Callback asincrono y sincrono

sinncrono para ejecutar inmediatamente dentro de la funcion que lo recibe

asincrono: para ser ejecutado mas tarde.

ECMAScript 2015(ES6) Promesas(Promise)

una promesa es un objeto y nos devuelve un objeto Promesa.

02. Promesa (Promise) 
una promesa es un objeto de JS que va a representar la finalizacion (con exito o con fracaso) de una operacion asincrona y su valor resultante 

1. pendiente (peding)
2. cumplida (fullfilled) (.then())
3. rechazado (rejected) (.catch())

manejar una promesa 
1. crear una proomesa (new Promise())
2. consumir una promesa ( .then(), .catch)
