//**************************************** */
//EJercicio 1 - b
//
//Sustitucíon de los callback por promesas
//************************************** */




//Función que recibe un array de objetos y un objeto con las propiedades 'key' y 'value'
//Se han eliminado los callback del ejercicio anterior ya que no son necesarias
const findOne = (list, { key, value }) => {
    //realiza lo mismo que en el ejercicio anterior pero es este caso no devuelve un callback sino una promesa
    return new Promise((resolve, reject) => {
    //La función ejecuta las instrucciones de forma asincrona con un retardo de 2 seg.
        setTimeout(() =>{
        const element = list.find(element => element[key] === value);
        //si el elemento existe (es decir la promesa se resuelve con éxito) nos devuelve el valor solicitado mediente el parametro resolve 
        //si por el contrario no existen los valores (promesa rechazada) se devuelve un mensaje de error 
        element ? resolve(value) : reject(new Error ("ERROR: Element Not Found"))
    },2000)
 })

}


// Las funciones callbacks ya no son necesarias, las acciones que realizaban se pasan como parametro a los métodos .then y .catch


//Array de objetos que se pasa como parametro a la función findOne
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];


//imprime el mensaje por pantalla, es una instrucción sincrona, por lo tanto es lo primero que se muestra 
console.log('findOne success');  
//Llamada a la función asíncrona que da como resultado el valor de la promesa bien resuelta o rechazada(se ejecuta después de los console.logs)                                                                      
findOne(users, { key: 'name', value: 'Carlos' })
    .then(name => console.log(`user: ${name}`))                              
    .catch(msg => console.log(msg));


//imprime el mensaje por pantalla, es una instrucción sincrona, por lo tanto es lo segundo que se muestra 
console.log('findOne error');
//Llamada a la función asíncrona que da como resultado el valor de la promesa bien resuelta o rechazada(se ejecuta después de los console.logs)     
findOne(users, { key: 'name', value: 'Fermin' })
    .then(name => console.log(`user: ${name}`))                              
    .catch(msg => console.log(msg));

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/