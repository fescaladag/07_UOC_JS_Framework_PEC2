//***************************************************** */
//EJercicio 1 - c
//
//Sustitucíon de los callback usando Async-Await
//***************************************************** */


//para utilizar la sintaxis Async - Await es necesario "envolver" el código dentro de una función asíncrona
const call = async (list, { key, value }) => {

    //usando 'await', esperamos que la promesa se resuelva y almacena el resultado en la variable element
    //de esta manera eliminamos la necesidad de pasar el resultado a los .then y .catch 
    const element = await findOne(list, {key, value});

    //se utilizan los try-catch para la gestión de errores
    try{
        console.log(`User: ${element[key]}`);
    }catch(error){
        console.log(error)
    }
}


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
        element ? resolve(element) : reject(new Error ("ERROR: Element Not Found"))
    },2000)
 })

}





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
//ya no son necesarios los .then y .catch desde la nueva función creada se programa lo que se desee hacer con el resultado de la promesa

 
call(users, { key: 'name', value: 'Carlos' });

//imprime el mensaje por pantalla, es una instrucción sincrona, por lo tanto es lo segundo que se muestra 
console.log('findOne error');
//Llamada a la función asíncrona que da como resultado el valor de la promesa bien resuelta o rechazada(se ejecuta después de los console.logs)                                                                      
//ya no son necesarios los .then y .catch desde la nueva función creada se programa lo que se desee hacer con el resultado de la promesa
call(users, { key: 'name', value: 'Fermin' })

//La ventaja de esta sintaxis es la de programar el asincronismo de una forma más secuencial y por tanto más sencilla de interpretar.

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
