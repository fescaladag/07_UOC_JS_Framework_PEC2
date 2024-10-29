
#### Pregunta sobre el contexto de this en Js



``` JS
//En el proyecto de ejemplo Ejer2-1-TODO 

//Al sustituir esta linea de codigo:
this.view.bindAddTodo(this.handleAddTodo); 

//Por esta otra:
this.view.bindAddTodo(this.service.addTodo); 


//Porque el resultado de 'this' es undefined
```

Al declarar una función **'this'** apunta al lugar donde ésta ha sido creada. Si se utiliza fuera de este contexto, (como en otra clase, por ejemplo) su valor pasará a ser _undefined_ por haber perdido el contexto original. En el ejemplo propuesto, se necesita una función _handle_ que hara de intermediara para permitir que la clase _controller_ tenga acceso al contexto de la clase _services_.

Al hacer la sustitución de código efectivamente el resultado que obtenemos es un error :

![alt text](image.png)


``` JS
//El método addTodo ha sido declarado en services.js. 
//Por lo tanto 'this' no está apuntando al mismo contexto que controller.js!!!!!
this.view.bindAddTodo(this.service.addTodo); 
```

Existe una solución para esto, además de utilizar las funciones manipuladoras y es declarar la función **addTodo** como _arrow Function_. 
A diferencia de las funciones declaradas, las funciones definidas como _arrow_ no crean un contexto propio, sino que **heredan el del elemento padre donde han sido creadas**

Si hacemos la siguiente sustitución en view.js:

``` JS
//Si en services.js, en lugar de declarar la función addTodo de esta manera:

//   addTodo(text) {
//     this.todos.push(new Todo({ text }));
//     this._commit(this.todos);
//   }

//usamos la sintaxis arrow function:
 addTodo = (text)=> {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

//Desaparece el error !!!

```
Observamos como ahora en controller.js, la llamada a la función reconoce el _this.service.addTodo_ ya que el contexto viene heradado del lugar donde se creó, es decir en services.js.



